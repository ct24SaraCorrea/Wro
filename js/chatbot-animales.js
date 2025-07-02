// Base de conocimientos del chatbot sobre animales
const animalKnowledge = {
    // Cuidado de perros
    'perro': {
        'cuidado': 'Los perros necesitan: 🥗 Alimentación balanceada 2-3 veces al día, 💧 Agua fresca siempre disponible, 🏃 Ejercicio diario (30-60 min), 🏥 Visitas veterinarias regulares, 🧼 Baños mensuales, 🦷 Cepillado dental semanal.',
        'alimentacion': 'La alimentación de perros debe incluir: 🍖 Proteínas de calidad, 🥕 Verduras y frutas, 🍚 Carbohidratos complejos, 🥜 Ácidos grasos omega-3. Evita: chocolate, uvas, cebolla, ajo, aguacate.',
        'ejercicio': 'Los perros necesitan ejercicio según su raza: 🐕 Perros pequeños: 30 min/día, 🐕 Perros medianos: 45 min/día, 🐕 Perros grandes: 60-90 min/día. Incluye paseos, juegos y entrenamiento mental.',
        'salud': 'Signos de alerta en perros: 😴 Letargia excesiva, 🍽️ Pérdida de apetito, 🤢 Vómitos o diarrea, 🐾 Cojera, 🐕 Cambios de comportamiento. Consulta al veterinario inmediatamente.',
        'entrenamiento': 'Para entrenar a tu perro: 🎯 Usa refuerzo positivo, ⏰ Sé consistente, 🏆 Premia buenos comportamientos, 🚫 Ignora malos comportamientos, 📚 Considera clases de obediencia.'
    },
    
    // Cuidado de gatos
    'gato': {
        'cuidado': 'Los gatos necesitan: 🥗 Alimentación 2-3 veces al día, 💧 Agua fresca, 🐱 Arena limpia diariamente, 🏠 Espacios elevados para trepar, 🧶 Juguetes para estimulación mental, 🏥 Visitas veterinarias anuales.',
        'alimentacion': 'Los gatos son carnívoros obligados. Necesitan: 🍖 Proteínas animales de alta calidad, 🐟 Ácidos grasos omega-3, 💧 Humedad en su dieta. Evita: leche, chocolate, cebolla, ajo.',
        'comportamiento': 'Comportamiento normal de gatos: 😺 Ronroneo (felicidad), 🐱 Frotar cabeza (marcaje), 🧶 Jugar (estimulación), 😴 Dormir 12-16 horas/día, 🐾 Rascar (marcaje territorial).',
        'salud': 'Signos de alerta en gatos: 😿 Cambios en el apetito, 🚽 Problemas para orinar, 🤢 Vómitos frecuentes, 😴 Letargia, 🐱 Cambios en el pelaje. Consulta al veterinario.',
        'estimulacion': 'Para estimular a tu gato: 🧶 Juguetes interactivos, 🏠 Rascadores y árboles para gatos, 🎯 Juegos de caza, 🌿 Hierba gatera, 🏠 Ventanas con vista al exterior.'
    },
    
    // Mascotas populares
    'mascotas': {
        'populares': 'Las mascotas más populares son: 🐕 Perros (leales y activos), 😺 Gatos (independientes), 🐰 Conejos (tranquilos), 🐹 Hámsters (pequeños), 🐦 Aves (coloridas), 🐠 Peces (relajantes), 🐢 Tortugas (longevas).',
        'primera_vez': 'Para principiantes recomiendo: 🐹 Hámsters (fáciles de cuidar), 🐠 Peces (bajo mantenimiento), 🐰 Conejos (tranquilos), 🐦 Periquitos (sociables).',
        'ninos': 'Mascotas ideales para niños: 🐕 Perros (leales y protectores), 😺 Gatos (independientes), 🐰 Conejos (tranquilos), 🐹 Hámsters (pequeños), 🐠 Peces (educativos).'
    },
    
    // Adopción
    'adopcion': {
        'beneficios': 'Adoptar una mascota: ❤️ Salvas una vida, 💰 Es más económico, 🏠 Ayudas a refugios, 🐾 Encuentras tu compañero perfecto, 🌍 Reduces el abandono animal.',
        'proceso': 'Proceso de adopción: 1️⃣ Visita refugios locales, 2️⃣ Conoce a las mascotas, 3️⃣ Completa formulario, 4️⃣ Entrevista con el refugio, 5️⃣ Período de adaptación, 6️⃣ Adopción final.',
        'responsabilidades': 'Responsabilidades de adoptar: 🏠 Proporcionar hogar seguro, 🥗 Alimentación adecuada, 🏥 Cuidado veterinario, 🧼 Higiene regular, ⏰ Tiempo y atención, 💰 Gastos económicos.'
    },
    
    // Emergencias
    'emergencia': {
        'signos': 'Emergencias veterinarias: 🚨 Dificultad para respirar, 🚨 Vómitos o diarrea severos, 🚨 Heridas sangrantes, 🚨 Convulsiones, 🚨 Pérdida de consciencia, 🚨 Dolor evidente.',
        'primeros_auxilios': 'Primeros auxilios básicos: 🩹 Mantén la calma, 🩹 Evalúa la situación, 🩹 Contacta veterinario, 🩹 No mediques sin consulta, 🩹 Mantén al animal tranquilo.',
        'prevencion': 'Prevención de emergencias: 🏠 Casa a prueba de mascotas, 🧪 Productos tóxicos fuera de alcance, 🚗 Transporte seguro, 🏥 Seguro veterinario, 📞 Números de emergencia a mano.'
    },
    
    // Razas
    'razas': {
        'perros_grandes': 'Perros grandes populares: 🐕 Labrador Retriever (familia), 🐕 Golden Retriever (leal), 🐕 Pastor Alemán (inteligente), 🐕 San Bernardo (gentil), 🐕 Gran Danés (noble).',
        'perros_pequenos': 'Perros pequeños populares: 🐕 Chihuahua (valiente), 🐕 Yorkshire Terrier (elegante), 🐕 Pug (divertido), 🐕 Pomerania (juguetón), 🐕 Bichón Frisé (cariñoso).',
        'gatos_populares': 'Razas de gatos populares: 😺 Persa (tranquilo), 😺 Siamés (vocal), 😺 Maine Coon (grande), 😺 Ragdoll (dócil), 😺 British Shorthair (robusto).'
    }
};

// Respuestas generales
const generalResponses = {
    'saludo': '¡Hola! 🐾 Soy tu asistente virtual de Petsear. Estoy aquí para ayudarte con cualquier pregunta sobre mascotas y animales. ¿En qué puedo ayudarte hoy?',
    'despedida': '¡Ha sido un placer ayudarte! 🐾 Recuerda que siempre estoy aquí para responder tus preguntas sobre mascotas. ¡Cuida mucho a tus compañeros peludos! ❤️',
    'no_entendido': 'Lo siento, no entendí tu pregunta. 🤔 ¿Podrías reformularla? Puedo ayudarte con: cuidado de mascotas, alimentación, salud, comportamiento, adopción, razas y más.',
    'gracias': '¡De nada! 😊 Me encanta ayudarte con tus mascotas. ¿Hay algo más en lo que pueda asistirte?'
};

// Elementos del DOM
const chatMessages = document.getElementById('chatMessages');
const messageInput = document.getElementById('messageInput');
const sendButton = document.getElementById('sendButton');
const loadingIndicator = document.getElementById('loadingIndicator');

// Variables globales
let isTyping = false;

// Inicialización
document.addEventListener('DOMContentLoaded', function() {
    // Mensaje de bienvenida
    setTimeout(() => {
        addBotMessage(generalResponses.saludo);
    }, 500);

    // Event listeners
    sendButton.addEventListener('click', sendMessage);
    messageInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    });

    // Event listeners para tags de temas
    document.querySelectorAll('.topic-tag').forEach(tag => {
        tag.addEventListener('click', function() {
            const topic = this.textContent.toLowerCase();
            askQuestion(`¿Qué necesito saber sobre ${topic}?`);
        });
    });
});

// Función para enviar mensaje
function sendMessage() {
    const message = messageInput.value.trim();
    if (message && !isTyping) {
        addUserMessage(message);
        messageInput.value = '';
        processMessage(message);
    }
}

// Función para preguntas rápidas
function askQuestion(question) {
    if (!isTyping) {
        addUserMessage(question);
        processMessage(question);
    }
}

// Función para procesar mensajes
function processMessage(message) {
    isTyping = true;
    showLoading();
    
    // Simular tiempo de respuesta
    setTimeout(() => {
        hideLoading();
        const response = generateResponse(message.toLowerCase());
        addBotMessage(response);
        isTyping = false;
    }, 1000 + Math.random() * 2000);
}

// Función para generar respuestas
function generateResponse(message) {
    // Saludos
    if (message.includes('hola') || message.includes('buenos días') || message.includes('buenas')) {
        return generalResponses.saludo;
    }
    
    // Despedidas
    if (message.includes('adiós') || message.includes('chao') || message.includes('hasta luego')) {
        return generalResponses.despedida;
    }
    
    // Agradecimientos
    if (message.includes('gracias') || message.includes('gracias')) {
        return generalResponses.gracias;
    }
    
    // Preguntas sobre perros
    if (message.includes('perro') || message.includes('can')) {
        if (message.includes('cuidar') || message.includes('cuidado')) {
            return animalKnowledge.perro.cuidado;
        }
        if (message.includes('comer') || message.includes('alimentar') || message.includes('comida')) {
            return animalKnowledge.perro.alimentacion;
        }
        if (message.includes('ejercicio') || message.includes('paseo') || message.includes('actividad')) {
            return animalKnowledge.perro.ejercicio;
        }
        if (message.includes('salud') || message.includes('enfermo') || message.includes('veterinario')) {
            return animalKnowledge.perro.salud;
        }
        if (message.includes('entrenar') || message.includes('adiestrar') || message.includes('comportamiento')) {
            return animalKnowledge.perro.entrenamiento;
        }
        return '🐕 Los perros son excelentes compañeros. ¿Te gustaría saber sobre su cuidado, alimentación, ejercicio, salud o entrenamiento?';
    }
    
    // Preguntas sobre gatos
    if (message.includes('gato') || message.includes('felino')) {
        if (message.includes('cuidar') || message.includes('cuidado')) {
            return animalKnowledge.gato.cuidado;
        }
        if (message.includes('comer') || message.includes('alimentar') || message.includes('comida')) {
            return animalKnowledge.gato.alimentacion;
        }
        if (message.includes('comportamiento') || message.includes('personalidad')) {
            return animalKnowledge.gato.comportamiento;
        }
        if (message.includes('salud') || message.includes('enfermo') || message.includes('veterinario')) {
            return animalKnowledge.gato.salud;
        }
        if (message.includes('estimular') || message.includes('jugar') || message.includes('entretenimiento')) {
            return animalKnowledge.gato.estimulacion;
        }
        return '😺 Los gatos son mascotas independientes y elegantes. ¿Te gustaría saber sobre su cuidado, alimentación, comportamiento, salud o estimulación?';
    }
    
    // Preguntas sobre mascotas en general
    if (message.includes('mascota') || message.includes('animal')) {
        if (message.includes('popular') || message.includes('común')) {
            return animalKnowledge.mascotas.populares;
        }
        if (message.includes('primera vez') || message.includes('principiante')) {
            return animalKnowledge.mascotas.primera_vez;
        }
        if (message.includes('niño') || message.includes('niños') || message.includes('familia')) {
            return animalKnowledge.mascotas.ninos;
        }
        return animalKnowledge.mascotas.populares;
    }
    
    // Preguntas sobre adopción
    if (message.includes('adoptar') || message.includes('adopción')) {
        if (message.includes('beneficio') || message.includes('ventaja')) {
            return animalKnowledge.adopcion.beneficios;
        }
        if (message.includes('proceso') || message.includes('cómo')) {
            return animalKnowledge.adopcion.proceso;
        }
        if (message.includes('responsabilidad') || message.includes('compromiso')) {
            return animalKnowledge.adopcion.responsabilidades;
        }
        return animalKnowledge.adopcion.beneficios;
    }
    
    // Preguntas sobre emergencias
    if (message.includes('emergencia') || message.includes('urgencia') || message.includes('enfermo')) {
        if (message.includes('signo') || message.includes('síntoma')) {
            return animalKnowledge.emergencia.signos;
        }
        if (message.includes('primeros auxilios') || message.includes('ayuda')) {
            return animalKnowledge.emergencia.primeros_auxilios;
        }
        if (message.includes('prevenir') || message.includes('evitar')) {
            return animalKnowledge.emergencia.prevencion;
        }
        return animalKnowledge.emergencia.signos;
    }
    
    // Preguntas sobre razas
    if (message.includes('raza') || message.includes('tipo')) {
        if (message.includes('grande') || message.includes('grande')) {
            return animalKnowledge.razas.perros_grandes;
        }
        if (message.includes('pequeño') || message.includes('pequeña')) {
            return animalKnowledge.razas.perros_pequenos;
        }
        if (message.includes('gato') || message.includes('felino')) {
            return animalKnowledge.razas.gatos_populares;
        }
        return '🐕🐱 Hay muchas razas de perros y gatos. ¿Te interesan perros grandes, pequeños, o razas de gatos?';
    }
    
    // Respuesta por defecto
    return generalResponses.no_entendido;
}

// Función para agregar mensaje del usuario
function addUserMessage(message) {
    const messageElement = document.createElement('div');
    messageElement.className = 'message user';
    messageElement.innerHTML = `
        <div class="message-content">${message}</div>
        <div class="message-time">${getCurrentTime()}</div>
    `;
    chatMessages.appendChild(messageElement);
    scrollToBottom();
}

// Función para agregar mensaje del bot
function addBotMessage(message) {
    const messageElement = document.createElement('div');
    messageElement.className = 'message bot';
    messageElement.innerHTML = `
        <div class="message-content">${message}</div>
        <div class="message-time">${getCurrentTime()}</div>
    `;
    chatMessages.appendChild(messageElement);
    scrollToBottom();
}

// Función para obtener hora actual
function getCurrentTime() {
    const now = new Date();
    return now.toLocaleTimeString('es-ES', { 
        hour: '2-digit', 
        minute: '2-digit' 
    });
}

// Función para hacer scroll al final
function scrollToBottom() {
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Función para mostrar loading
function showLoading() {
    loadingIndicator.style.display = 'flex';
}

// Función para ocultar loading
function hideLoading() {
    loadingIndicator.style.display = 'none';
}

// Función para limpiar chat
function clearChat() {
    chatMessages.innerHTML = '';
    setTimeout(() => {
        addBotMessage(generalResponses.saludo);
    }, 500);
}

// Exportar funciones para uso global
window.askQuestion = askQuestion;
window.clearChat = clearChat; 