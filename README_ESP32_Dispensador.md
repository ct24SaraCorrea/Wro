# 🐾 Petsear - Plataforma Web de Mascotas

## Descripción
Petsear es una plataforma web integral dedicada al cuidado y bienestar de mascotas, ofreciendo información, recursos y herramientas interactivas para dueños de animales.

## Características Principales

### 🐕 Asistente Virtual de Animales
- ✅ Chatbot inteligente con respuestas sobre cuidado de mascotas
- ✅ Base de conocimientos especializada en perros, gatos y otras mascotas
- ✅ Preguntas rápidas y temas populares
- ✅ Interfaz moderna y responsive
- ✅ Consejos de salud y emergencias veterinarias

### 🌐 Páginas Web
- ✅ **Página Principal**: Información general sobre mascotas
- ✅ **Fundaciones Panamá**: Información sobre refugios y adopción
- ✅ **Prototipo Arduino**: Control de dispositivos IoT para mascotas
- ✅ **Cámara ESP32**: Monitoreo remoto de mascotas
- ✅ **Test ESP32**: Pruebas de conectividad y funcionalidad

### 🎨 Diseño y UX
- ✅ Interfaz moderna con gradientes y efectos visuales
- ✅ Diseño completamente responsive
- ✅ Animaciones suaves y transiciones
- ✅ Iconografía intuitiva con emojis
- ✅ Paleta de colores atractiva y profesional

## Estructura del Proyecto

```
petsear/
├── chatbot-animales.html          # Asistente virtual de mascotas
├── arduino-prototype.html         # Control de dispositivos IoT
├── esp32-camera.html             # Monitoreo con cámara
├── test_esp32.html               # Pruebas de conectividad
├── fundaciones-panama.html       # Información de refugios
├── Pagina con infor.html         # Página principal informativa
├── css/
│   ├── estilochatbot.css         # Estilos del chatbot
│   ├── estilodepaginaarduino.css # Estilos Arduino
│   ├── estilodepaginafundaciones.css # Estilos fundaciones
│   ├── estilodepaginainfor.css   # Estilos página principal
│   ├── estilodepaginasensores.css # Estilos sensores
│   └── estilodepaginaingreso.css # Estilos de ingreso
├── js/
│   ├── chatbot-animales.js       # Lógica del chatbot
│   ├── arduino-prototype.js      # JavaScript Arduino
│   └── fundaciones-panama.js     # JavaScript fundaciones
├── imagenes/                     # Recursos gráficos
└── README_ESP32_Dispensador.md   # Este archivo
```

## Funcionalidades del Chatbot

### 🧠 Base de Conocimientos
El asistente virtual incluye información especializada sobre:

#### 🐕 Perros
- Cuidado básico y avanzado
- Alimentación y nutrición
- Ejercicio y actividad física
- Salud y signos de alerta
- Entrenamiento y comportamiento

#### 😺 Gatos
- Cuidado felino específico
- Alimentación carnívora
- Comportamiento natural
- Estimulación mental
- Salud y bienestar

#### 🏠 Adopción
- Beneficios de adoptar
- Proceso de adopción
- Responsabilidades del dueño
- Refugios y organizaciones

#### 🚨 Emergencias
- Signos de alerta
- Primeros auxilios
- Prevención de accidentes
- Contactos de emergencia

#### 🐾 Razas
- Perros grandes y pequeños
- Razas de gatos populares
- Características específicas
- Recomendaciones por estilo de vida

### 💬 Interactividad
- Preguntas rápidas predefinidas
- Respuestas contextuales
- Indicador de escritura
- Historial de conversación
- Temas populares con tags

## Tecnologías Utilizadas

### Frontend
- **HTML5**: Estructura semántica
- **CSS3**: Estilos modernos con Flexbox y Grid
- **JavaScript ES6+**: Funcionalidad interactiva
- **Font Awesome**: Iconografía
- **Google Fonts**: Tipografía Poppins

### Características Técnicas
- Diseño responsive (mobile-first)
- Animaciones CSS y JavaScript
- Localización en español
- Accesibilidad web
- Optimización de rendimiento

## Instalación y Uso

### 1. Clonar el Repositorio
```bash
git clone [URL_DEL_REPOSITORIO]
cd petsear
```

### 2. Abrir en el Navegador
Simplemente abre cualquier archivo HTML en tu navegador web preferido:
- `chatbot-animales.html` - Asistente virtual
- `arduino-prototype.html` - Control IoT
- `fundaciones-panama.html` - Información de refugios

### 3. Servidor Local (Opcional)
Para mejor experiencia, puedes usar un servidor local:
```bash
# Con Python
python -m http.server 8000

# Con Node.js
npx serve .

# Con PHP
php -S localhost:8000
```

## Personalización

### Modificar el Chatbot
Edita `js/chatbot-animales.js` para:
- Agregar nuevas respuestas
- Modificar la base de conocimientos
- Cambiar el comportamiento del bot
- Personalizar respuestas

### Personalizar Estilos
Modifica los archivos CSS para:
- Cambiar colores y temas
- Ajustar el diseño responsive
- Agregar nuevas animaciones
- Personalizar la tipografía

### Agregar Nuevas Páginas
1. Crea el archivo HTML
2. Agrega los estilos CSS correspondientes
3. Incluye JavaScript si es necesario
4. Actualiza la navegación

## Contribuir

### Cómo Contribuir
1. Haz un fork del repositorio
2. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. Haz commit de tus cambios (`git commit -am 'Agregar nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

### Áreas de Mejora
- [ ] Agregar más especies de mascotas
- [ ] Implementar base de datos local
- [ ] Agregar sistema de usuarios
- [ ] Integrar APIs veterinarias
- [ ] Agregar más idiomas
- [ ] Implementar PWA

## Soporte

### Problemas Comunes
1. **El chatbot no responde**: Verifica que JavaScript esté habilitado
2. **Estilos no se cargan**: Asegúrate de que los archivos CSS estén en la carpeta correcta
3. **Imágenes no aparecen**: Verifica las rutas de las imágenes

### Contacto
Para soporte técnico o preguntas:
- Abre un issue en el repositorio
- Contacta al equipo de desarrollo
- Revisa la documentación

## Licencia
Este proyecto está bajo la Licencia MIT. Ver el archivo LICENSE para más detalles.

## Agradecimientos
- Veterinarios y expertos en mascotas por su asesoría
- Comunidad de desarrolladores web
- Usuarios que contribuyen con feedback
- Refugios y organizaciones de rescate animal

---

**Desarrollado con ❤️ para el bienestar de las mascotas**

*Petsear - Tu compañero digital en el cuidado de mascotas* 