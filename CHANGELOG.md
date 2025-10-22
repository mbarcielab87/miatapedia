# Changelog

All notable changes to Miatapedia will be documented in this file.

## SEO Multilingüe – Octubre 2025

### Added
- **Títulos Meta Únicos**: Implementados títulos únicos y optimizados para SEO en todas las páginas de inicio (5 idiomas)
- **Descripciones Meta Optimizadas**: Creadas descripciones únicas para todas las páginas principales en 5 idiomas
- **Optimización Multilingual**: Mejorado el SEO para páginas en español, inglés, portugués, alemán y francés

### Changed
- **Páginas de Inicio**: Actualizados meta titles y descriptions para index.html, en.html, fr.html, pt.html, de.html
- **Páginas Principales**:
  - Manuales/Manuals: Títulos y descripciones optimizados en todos los idiomas
  - Clubs: Meta datos únicos para cada versión lingüística
  - Tiendas/Shops: Descripciones específicas por idioma
  - Eventos/Events: Títulos y descripciones personalizados

### Technical Details
- **Longitud de Títulos**: Optimizados entre 45-60 caracteres para máximo impacto SEO
- **Longitud de Descripciones**: Configuradas entre 130-160 caracteres para snippets óptimos
- **Verificación de Duplicados**: Confirmado que no existen títulos o descripciones duplicadas
- **Validación de Contenido**: Verificado que no hay meta tags vacíos

### SEO Impact
- Mejora de la indexación en motores de búsqueda para contenido multilingüe
- Títulos más descriptivos y específicos por página
- Descripciones que incluyen keywords relevantes y números específicos (500+ manuales, 60+ clubs, 17 tiendas)
- Consistencia en el branding "Miatapedia" y términos clave "Mazda MX-5", "Miata"

### Files Modified
```
index.html (Spanish home)
en.html (English home)
fr.html (French home)
pt.html (Portuguese home)
de.html (German home)
manuales.html (Spanish manuals)
manuals.html (English manuals)
clubs.html (Spanish clubs)
clubs-en.html (English clubs)
tiendas.html (Spanish shops)
shops.html (English shops)
eventos.html (Spanish events)
events.html (English events)
manuals-pt.html (Portuguese manuals)
clubs-pt.html (Portuguese clubs)
shops-pt.html (Portuguese shops)
events-pt.html (Portuguese events)
manuals-de.html (German manuals)
clubs-de.html (German clubs)
shops-de.html (German shops)
events-de.html (German events)
manuals-fr.html (French manuals)
clubs-fr.html (French clubs)
shops-fr.html (French shops)
events-fr.html (French events)
```

---

## Previous Changes

### BreadcrumbList SEO Fix – Octubre 2025
- Implementadas Netlify Functions para monitoreo de schema JSON-LD
- Agregadas funciones de validación automática para BreadcrumbList
- Configuración de verificaciones programadas cada 5 minutos

### Navegación y Estructura – Octubre 2025
- Eliminado soporte para idioma chino
- Corregidos problemas de navegación en selectores de idioma
- Estandarizada estructura de navegación across todas las páginas
- Resueltos problemas de despliegue en Netlify (submodule conflicts)