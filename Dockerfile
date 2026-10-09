# Usamos una imagen oficial y ligera de Nginx
FROM nginx:alpine

# Copiamos el contenido de nuestra carpeta 'src' al directorio público del servidor
COPY ./src /usr/share/nginx/html

# Exponemos el puerto 80 para acceder desde el navegador
EXPOSE 80

# Comando por defecto para mantener el servidor corriendo
CMD ["nginx", "-g", "daemon off;"]