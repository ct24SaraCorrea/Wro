# Configuración de Firebase para Petsear Application

## Configuración Actual

La aplicación está configurada con Firebase usando un archivo de configuración centralizado (`js/firebase-config.js`) que puede ser reutilizado en todas las páginas:

```javascript
const firebaseConfig = {
    apiKey: "AIzaSyCSzkYFX-shtZjvFoxYB9q3NTTjAovD8yk",
    authDomain: "petsear-7ebe5.firebaseapp.com",
    projectId: "petsear-7ebe5",
    storageBucket: "petsear-7ebe5.firebasestorage.app",
    messagingSenderId: "278405273956",
    appId: "1:278405273956:web:72d9dbe60af57c24920271",
    measurementId: "G-Q8MLMY41KZ"
};
```

## Servicios Configurados

### 1. Firebase Authentication
- Autenticación anónima habilitada
- Los usuarios se autentican automáticamente al cargar la página
- Evento `firebaseAuthReady` disparado cuando el usuario está listo

### 2. Firestore Database
- Colección: `chat_messages` (para el chatbot)
- Colección: `user_data` (para datos generales de usuario)
- Colección: `demo_data` (para ejemplos y pruebas)
- Estructura de datos flexible y extensible

### 3. Firebase Analytics
- Seguimiento de eventos automático
- Métricas de uso de toda la aplicación
- Funciones personalizadas para tracking

## Cómo Usar Firebase en Cualquier Página

### 1. Incluir el archivo de configuración
```html
<script type="module" src="js/firebase-config.js"></script>
```

### 2. Funciones disponibles globalmente
```javascript
// Autenticación
window.getCurrentUser()           // Obtener usuario actual
window.isUserAuthenticated()      // Verificar si está autenticado

// Base de datos
window.saveUserData(data, collection)           // Guardar datos de usuario
window.saveMessageToFirebase(text, sender, collection)  // Guardar mensajes
window.loadChatHistory(collection, limit)       // Cargar historial

// Analytics
window.trackEvent(eventName, parameters)        // Registrar eventos

// Utilidades
window.displayMessage(text, sender, timestamp, containerId)  // Mostrar mensajes
```

### 3. Escuchar eventos de Firebase
```javascript
// Cuando Firebase esté listo
window.addEventListener('firebaseAuthReady', function(event) {
    const { user } = event.detail;
    console.log('Usuario autenticado:', user.uid);
});

// Cuando se cargue el historial
window.addEventListener('chatHistoryLoaded', function(event) {
    const { messages, collectionName } = event.detail;
    console.log('Historial cargado:', messages);
});
```

## Reglas de Seguridad para Firestore

Agrega estas reglas en la consola de Firebase > Firestore Database > Rules:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Reglas para chat_messages
    match /chat_messages/{document} {
      // Permitir lectura y escritura solo a usuarios autenticados
      allow read, write: if request.auth != null;
      
      // Validar estructura de datos
      allow create: if request.auth != null 
        && request.resource.data.text is string
        && request.resource.data.sender in ['user', 'bot']
        && request.resource.data.userId == request.auth.uid
        && request.resource.data.timestamp is timestamp;
    }
  }
}
```

## Funcionalidades Implementadas

### ✅ Configuración Centralizada
- Un solo archivo de configuración para toda la aplicación
- Fácil mantenimiento y actualización
- Reutilizable en todas las páginas

### ✅ Autenticación Automática
- Los usuarios se autentican anónimamente al cargar la página
- No requiere registro manual
- Eventos personalizados para sincronización

### ✅ Base de Datos Flexible
- Múltiples colecciones para diferentes tipos de datos
- Funciones genéricas para guardar cualquier tipo de información
- Estructura de datos extensible

### ✅ Analytics Avanzado
- Seguimiento automático de eventos
- Funciones personalizadas para tracking específico
- Métricas de uso disponibles en la consola de Firebase

### ✅ Sistema de Eventos
- Eventos personalizados para sincronización entre componentes
- Manejo asíncrono de operaciones de Firebase
- Fallback graceful si Firebase no está disponible

## Próximos Pasos Recomendados

### 1. Configurar Reglas de Seguridad
- Ve a Firebase Console > Firestore Database > Rules
- Copia y pega las reglas de seguridad proporcionadas

### 2. Probar la Configuración
- Abre `ejemplo-firebase-uso.html` en tu navegador
- Verifica que todas las funciones de Firebase funcionen correctamente
- Revisa la consola del navegador para mensajes de confirmación

### 3. Integrar en Otras Páginas
- Agrega `<script type="module" src="js/firebase-config.js"></script>` a cualquier página
- Usa las funciones globales disponibles según tus necesidades
- Escucha los eventos de Firebase para sincronización

### 4. Habilitar Servicios Adicionales (Opcional)
- **Firebase Hosting**: Para desplegar la aplicación
- **Firebase Storage**: Para guardar imágenes de mascotas
- **Firebase Functions**: Para procesamiento de IA más avanzado

### 5. Configurar Dominios Autorizados
- Ve a Firebase Console > Authentication > Settings
- Agrega tu dominio en "Authorized domains"

### 6. Monitoreo y Analytics
- Revisa las métricas en Firebase Console > Analytics
- Configura eventos personalizados si es necesario

## Comandos de Despliegue (Opcional)

Si quieres desplegar en Firebase Hosting:

```bash
# Instalar Firebase CLI
npm install -g firebase-tools

# Iniciar sesión
firebase login

# Inicializar proyecto
firebase init hosting

# Desplegar
firebase deploy
```

## Solución de Problemas

### Error de CORS
- Asegúrate de que tu dominio esté en los dominios autorizados
- Verifica las reglas de seguridad de Firestore

### Error de Autenticación
- Verifica que la autenticación anónima esté habilitada
- Revisa la consola del navegador para errores

### Mensajes No Se Guardan
- Verifica las reglas de seguridad de Firestore
- Asegúrate de que el usuario esté autenticado

## Contacto

Para soporte técnico o preguntas sobre la configuración de Firebase, revisa la documentación oficial de Firebase o contacta al equipo de desarrollo. 