// Arduino Prototype Page JavaScript

// Variables globales
let esp32IP = null;
let connectionStatus = false;

// Initialize AOS (Animate On Scroll)
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 1000,
        once: true
    });
    
    // Start simulation immediately
    updateSimulation();
    
    // Update simulation every second
    setInterval(updateSimulation, 1000);
    
    // Buscar ESP32 en la red
    findESP32();
    
    // Verificar conexión cada 5 segundos
    setInterval(checkConnection, 5000);
    
    // Actualizar información del sensor cada 2 segundos
    setInterval(updateSensorInfo, 2000);
});

// Función para buscar el ESP32 en la red local
async function findESP32() {
    // Intentar con IPs comunes del ESP32, incluyendo la IP específica del usuario
    const commonIPs = [
        '192.168.0.5',      // IP específica del usuario
        '192.168.0.100',
        '192.168.0.101', 
        '192.168.0.102',
        '192.168.0.103',
        '192.168.0.104',
        '192.168.0.105',
        '192.168.1.100',
        '192.168.1.101',
        '192.168.1.102',
        '192.168.1.103',
        '192.168.1.104',
        '192.168.1.105'
    ];
    
    for (let ip of commonIPs) {
        try {
            console.log(`🔍 Probando IP: ${ip}`);
            const response = await fetch(`http://${ip}/status`, {
                method: 'GET',
                timeout: 3000
            });
            
            if (response.ok) {
                esp32IP = ip;
                connectionStatus = true;
                showNotification(`ESP32 encontrado en ${ip} ✅`, 'success');
                updateConnectionStatus();
                return;
            }
        } catch (error) {
            console.log(`❌ IP ${ip} no responde:`, error.message);
        }
    }
    
    // Si no se encuentra, mostrar mensaje
    showNotification('ESP32 no encontrado. Verifica la conexión ⚠️', 'error');
    updateConnectionStatus();
}

// Función para verificar la conexión con el ESP32
async function checkConnection() {
    if (!esp32IP) return;
    
    try {
        const response = await fetch(`http://${esp32IP}/status`, {
            method: 'GET',
            timeout: 3000
        });
        
        if (response.ok) {
            if (!connectionStatus) {
                connectionStatus = true;
                showNotification('Conexión restaurada con ESP32 ✅', 'success');
                updateConnectionStatus();
            }
        } else {
            if (connectionStatus) {
                connectionStatus = false;
                showNotification('Conexión perdida con ESP32 ❌', 'error');
                updateConnectionStatus();
            }
        }
    } catch (error) {
        if (connectionStatus) {
            connectionStatus = false;
            showNotification('Conexión perdida con ESP32 ❌', 'error');
            updateConnectionStatus();
        }
    }
}

// Función para actualizar el estado de conexión en la UI
function updateConnectionStatus() {
    const statusElement = document.getElementById('connectionStatus');
    const ipElement = document.getElementById('esp32IP');
    const statusTextElement = document.getElementById('esp32Status');
    
    if (statusElement) {
        if (connectionStatus) {
            statusElement.innerHTML = `<i class="fas fa-wifi text-success"></i> Conectado a ${esp32IP}`;
            statusElement.className = 'text-success';
        } else {
            statusElement.innerHTML = '<i class="fas fa-wifi text-danger"></i> Desconectado';
            statusElement.className = 'text-danger';
        }
    }
    
    if (ipElement) {
        ipElement.textContent = esp32IP || 'No encontrado';
    }
    
    if (statusTextElement) {
        statusTextElement.textContent = connectionStatus ? 'Conectado' : 'Desconectado';
        statusTextElement.className = connectionStatus ? 'text-success' : 'text-danger';
    }
    
    // Actualizar última actividad
    const lastActivityElement = document.getElementById('lastActivity');
    if (lastActivityElement) {
        if (connectionStatus) {
            const now = new Date();
            lastActivityElement.textContent = now.toLocaleTimeString();
        } else {
            lastActivityElement.textContent = '--';
        }
    }
}

// Copy Code Function
function copyCode() {
    const code = document.querySelector('.code-block pre code').innerText;
    navigator.clipboard.writeText(code).then(() => {
        const button = document.querySelector('.copy-button');
        const originalText = button.innerHTML;
        
        button.innerHTML = '<i class="fas fa-check"></i> Copiado!';
        button.style.background = 'rgba(76, 175, 80, 0.8)';
        
        setTimeout(() => {
            button.innerHTML = originalText;
            button.style.background = 'rgba(255,255,255,0.1)';
        }, 2000);
    }).catch(err => {
        console.error('Error copying code:', err);
        alert('Error al copiar el código');
    });
}

// Simulate Real-time Data
function updateSimulation() {
    try {
        // Simulate heart rate (60-160 BPM)
        const heartRate = Math.floor(Math.random() * 100) + 60;
        const heartRateElement = document.getElementById('heartRate');
        if (heartRateElement) {
            heartRateElement.textContent = heartRate;
        }

        // Simulate location (Panama City coordinates)
        const lat = 8.9824 + (Math.random() * 0.01);
        const lon = -79.5199 + (Math.random() * 0.01);
        const locationElement = document.getElementById('location');
        if (locationElement) {
            locationElement.textContent = `${lat.toFixed(4)}, ${lon.toFixed(4)}`;
        }

        // Simulate battery level (decreasing slowly)
        const batteryElement = document.getElementById('battery');
        const batteryLevelElement = document.getElementById('batteryLevel');
        
        if (batteryElement && batteryLevelElement) {
            let battery = parseFloat(batteryElement.textContent) || 100;
            if (battery > 0) {
                battery -= Math.random() * 0.1;
                battery = Math.max(0, battery);
            }
            
            batteryElement.textContent = battery.toFixed(1) + '%';
            batteryLevelElement.style.width = battery + '%';
            
            // Change battery color based on level
            if (battery < 20) {
                batteryLevelElement.style.background = '#f44336'; // Red
            } else if (battery < 50) {
                batteryLevelElement.style.background = '#ff9800'; // Orange
            } else {
                batteryLevelElement.style.background = 'var(--primary-color)'; // Green
            }
        }
    } catch (error) {
        console.error('Error updating simulation:', error);
    }
}

// Gate Control Function
async function abrirCompuerta() {
    const button = event.target.closest('button');
    if (button) {
        button.classList.add('loading');
        button.disabled = true;
    }
    
    if (!esp32IP) {
        showNotification('ESP32 no encontrado. Buscando... 🔍', 'error');
        await findESP32();
        if (button) {
            button.classList.remove('loading');
            button.disabled = false;
        }
        return;
    }
    
    try {
        const response = await fetch(`http://${esp32IP}/abrir`, {
            method: 'GET',
            timeout: 5000
        });
        
        if (response.ok) {
            const data = await response.json();
            showNotification('Compuerta abierta exitosamente ✅', 'success');
            
            // Actualizar estado visual
            setTimeout(() => {
                showNotification('Compuerta cerrada automáticamente 🔒', 'info');
            }, 3000);
        } else {
            showNotification('Error en la solicitud ❌', 'error');
        }
    } catch (error) {
        showNotification('Error de conexión con ESP32 ❌', 'error');
        console.error('Gate control error:', error);
        connectionStatus = false;
        updateConnectionStatus();
    } finally {
        if (button) {
            button.classList.remove('loading');
            button.disabled = false;
        }
    }
}

// Food Dispenser Function
async function abrirServo() {
    const button = event.target.closest('button');
    if (button) {
        button.classList.add('loading');
        button.disabled = true;
    }
    
    if (!esp32IP) {
        showNotification('ESP32 no encontrado. Buscando... 🔍', 'error');
        await findESP32();
        if (button) {
            button.classList.remove('loading');
            button.disabled = false;
        }
        return;
    }
    
    try {
        const response = await fetch(`http://${esp32IP}/abrir`, {
            method: 'GET',
            timeout: 5000
        });
        
        if (response.ok) {
            const data = await response.json();
            showNotification('Dispensador activado exitosamente 🟢', 'success');
            
            // Simular dispensado de comida
            setTimeout(() => {
                showNotification('Comida dispensada 🍽️', 'info');
            }, 2000);
        } else {
            showNotification('Error en la activación ❌', 'error');
        }
    } catch (error) {
        showNotification('Error de conexión con ESP32 ❌', 'error');
        console.error('Servo control error:', error);
        connectionStatus = false;
        updateConnectionStatus();
    } finally {
        if (button) {
            button.classList.remove('loading');
            button.disabled = false;
        }
    }
}

// Función para obtener el estado del ESP32
async function getESP32Status() {
    if (!esp32IP) return null;
    
    try {
        const response = await fetch(`http://${esp32IP}/status`, {
            method: 'GET',
            timeout: 3000
        });
        
        if (response.ok) {
            return await response.json();
        }
    } catch (error) {
        console.error('Error getting ESP32 status:', error);
    }
    
    return null;
}

// Custom Notification System
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.custom-notification');
    existingNotifications.forEach(notification => notification.remove());
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `custom-notification ${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span>${message}</span>
            <button onclick="this.parentElement.parentElement.remove()" class="notification-close">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#4CAF50' : type === 'error' ? '#f44336' : '#2196F3'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 9999;
        animation: slideIn 0.3s ease-out;
        max-width: 300px;
    `;
    
    // Add animation styles
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        .notification-content {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        .notification-close {
            background: none;
            border: none;
            color: white;
            cursor: pointer;
            margin-left: 10px;
            padding: 0;
            font-size: 14px;
        }
        .notification-close:hover {
            opacity: 0.8;
        }
    `;
    document.head.appendChild(style);
    
    // Add to page
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 5000);
}

// Función para abrir la interfaz web del ESP32
function openESP32Interface() {
    if (esp32IP) {
        window.open(`http://${esp32IP}`, '_blank');
    } else {
        showNotification('ESP32 no encontrado. Buscando... 🔍', 'error');
        findESP32();
    }
}

// Función para actualizar información del sensor
async function updateSensorInfo() {
    if (!esp32IP || !connectionStatus) return;
    
    try {
        const status = await getESP32Status();
        if (status) {
            const distanceElement = document.getElementById('sensorDistance');
            if (distanceElement) {
                distanceElement.textContent = status.distancia + ' cm';
            }
        }
    } catch (error) {
        console.error('Error updating sensor info:', error);
    }
}

// Export functions for global access
window.copyCode = copyCode;
window.updateSimulation = updateSimulation;
window.abrirCompuerta = abrirCompuerta;
window.abrirServo = abrirServo;
window.showNotification = showNotification; 