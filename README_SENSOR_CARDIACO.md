# Sensor de Ritmo Cardíaco MAX30102 - Configuración

## Componentes Necesarios

### Hardware
- **ESP32** (cualquier modelo)
- **Sensor MAX30102** (sensor de ritmo cardíaco y SpO2)
- **Cables jumper** (4 cables)
- **Breadboard** (opcional)
- **Cable USB** para programar el ESP32

### Software
- **Arduino IDE** con soporte para ESP32
- **Librerías necesarias**:
  - `MAX30100_PulseOximeter` por OXullo Intersecans
  - `ArduinoJson` por Benoit Blanchon
  - `Adafruit_GPS` (si usas GPS)

## Conexiones del Sensor MAX30102

| Pin del MAX30102 | Pin del ESP32 | Descripción |
|------------------|---------------|-------------|
| VIN/VCC          | 3.3V          | Alimentación |
| GND              | GND           | Tierra       |
| SDA              | GPIO21        | Datos I2C    |
| SCL              | GPIO22        | Reloj I2C    |

## Instalación de Librerías

1. Abre Arduino IDE
2. Ve a **Herramientas > Administrar Bibliotecas**
3. Busca e instala:
   - `MAX30100_PulseOximeter`
   - `ArduinoJson`

## Configuración del Código

### 1. Configurar WiFi
Edita estas líneas en el código:
```cpp
const char* ssid = "TU_WIFI_SSID";
const char* password = "TU_WIFI_PASSWORD";
```

### 2. Configurar Pines (si es necesario)
El sensor usa I2C por defecto en los pines:
- SDA: GPIO21
- SCL: GPIO22

Si necesitas cambiar estos pines, modifica en el código:
```cpp
Wire.begin(SDA_PIN, SCL_PIN);
```

## Uso del Sensor

### Posicionamiento
1. **Para mascotas pequeñas**: Coloca el sensor en la base del cuello o en el pecho
2. **Para mascotas grandes**: Puedes usar en la oreja o en la pata
3. **Asegúrate** de que el sensor esté en contacto directo con la piel

### Interpretación de Datos

#### Ritmo Cardíaco (BPM)
- **Perros adultos**: 60-140 BPM
- **Gatos adultos**: 140-220 BPM
- **Cachorros**: 120-160 BPM
- **Gatitos**: 200-300 BPM

#### SpO2 (Saturación de Oxígeno)
- **Normal**: 95-100%
- **Precaución**: 90-94%
- **Crítico**: <90%

## Endpoints Disponibles

### GET /status
Retorna el estado completo del sistema:
```json
{
  "heartRate": 85.5,
  "spO2": 98.2,
  "distancia": 25,
  "connected": true,
  "timestamp": 1234567890
}
```

### GET /heartrate
Retorna solo datos del sensor cardíaco:
```json
{
  "heartRate": 85.5,
  "spO2": 98.2,
  "valid": true
}
```

## Solución de Problemas

### Sensor no detectado
1. Verifica las conexiones I2C
2. Asegúrate de que el sensor esté bien conectado
3. Revisa que la librería esté instalada correctamente

### Lecturas inconsistentes
1. Asegúrate de que el sensor esté en contacto directo con la piel
2. Evita movimientos bruscos durante la medición
3. Mantén el sensor limpio y libre de pelo

### Valores de SpO2 incorrectos
1. El sensor necesita calibración para SpO2
2. Los valores de SpO2 pueden no ser precisos en mascotas
3. Enfócate principalmente en el ritmo cardíaco

## Calibración del Sensor

### Para Ritmo Cardíaco
1. Coloca el sensor en la posición correcta
2. Mantén la mascota quieta por 30 segundos
3. Los primeros valores pueden ser inestables
4. Espera 1-2 minutos para lecturas estables

### Para SpO2 (Opcional)
1. El sensor viene pre-calibrado para humanos
2. Para mascotas, los valores pueden variar
3. Usa como referencia relativa, no absoluta

## Integración con la Web

El sistema web automáticamente:
1. **Detecta** cuando hay datos reales disponibles
2. **Muestra** indicadores visuales (Real vs Simulado)
3. **Actualiza** en tiempo real los valores
4. **Almacena** históricos de datos (opcional)

## Mantenimiento

### Limpieza
- Limpia el sensor con alcohol isopropílico
- Evita que se acumule pelo o suciedad
- Revisa las conexiones regularmente

### Verificación
- Prueba el sensor semanalmente
- Compara con otros métodos de medición
- Documenta cualquier anomalía

## Notas Importantes

⚠️ **Advertencias**:
- Este sensor es para monitoreo, no para diagnóstico médico
- Consulta siempre con un veterinario para problemas de salud
- Los valores pueden variar según la raza y tamaño de la mascota

✅ **Recomendaciones**:
- Usa en conjunto con otros métodos de monitoreo
- Mantén un registro de valores normales de tu mascota
- Revisa regularmente el funcionamiento del sistema 