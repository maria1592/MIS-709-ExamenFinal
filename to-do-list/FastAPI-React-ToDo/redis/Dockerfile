FROM redis:alpine

# Copia opcional de archivo de configuración si quieres personalizar
# COPY redis.conf /usr/local/etc/redis/redis.conf

# Exponer puerto Redis
EXPOSE 6379

# CMD por defecto (si usas redis.conf, sería: ["redis-server", "/usr/local/etc/redis/redis.conf"])
CMD ["redis-server"]
