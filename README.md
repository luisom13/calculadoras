# CalculaSV 💵

**Herramientas financieras para El Salvador — PWA instalable, funciona offline.**

Aplicación web de una sola página con tres calculadoras integradas: salario neto, hipotecaria con simulación de pagos extra, y ahorro e inversión con interés compuesto. Se instala como app nativa en móvil y escritorio gracias al Service Worker.

---

## 🚀 Demo en vivo

**[https://luisom13.github.io/calculadoras/](https://luisom13.github.io/calculadoras/)**

---

## 🛠️ Herramientas incluidas

### 💼 Calculadora de Salario Neto

Calcula el salario neto a recibir basándose en las regulaciones laborales vigentes de El Salvador.

**Descuentos que calcula:**
- **ISSS** — 3% sobre salario (con techo configurable de $1,000)
- **AFP** — 7.25% sobre salario bruto
- **ISR / Renta** — según tabla DGII vigente (método mensual o anualizado)

**Beneficios anuales que estima:**
- **Aguinaldo** — según tabla legal (10/15/18 días por años de servicio) o días personalizados por empresa
- **Vacaciones + bono vacacional** — `salario ÷ 30 × días`, más el porcentaje de bono sobre ese monto
- **Quincena 25** — 50% del salario mensual, libre de ISR, ISSS y AFP; proporcional si el empleado tiene menos de 1 año. Aplica a salarios ≤ $1,500/mes

**Configurable por empresa:**
| Parámetro | Valor legal por defecto | Modificable |
|---|---|---|
| % ISSS empleado | 3% | ✅ |
| Techo ISSS | $1,000 | ✅ |
| % AFP empleado | 7.25% | ✅ |
| Días de aguinaldo | Según ley | ✅ |
| Días de vacación | 15 días | ✅ |
| % bono vacacional | 30% | ✅ |
| Frecuencia de pago | Quincenal 15/30 | ✅ |

**Referencia legal:**
- Salario mínimo vigente: **$408.80/mes**
- Tabla ISR: DGII El Salvador 2024
- Quincena 25: Decreto Legislativo (sector público obligatorio; privado obligatorio desde 2027)

---

### 🏠 Calculadora Hipotecaria

Calcula la cuota mensual real de un préstamo hipotecario incluyendo los seguros obligatorios en El Salvador. Ahora incluye **simulación de pagos extra** para visualizar el ahorro en tiempo e intereses.

**Qué calcula:**
- Cuota mensual (capital + intereses, método francés)
- Seguro de deuda / vida: **0.038%/mes** sobre el saldo del préstamo
- Seguro de daños (incendio/terremoto): **0.025%/mes** sobre el 70% del precio
- Total a pagar, total de intereses y prima inicial

**Simulación de pagos extra:**
- Abono mensual adicional al capital (recurrente)
- Abono anual extraordinario (ej. aguinaldo o bono)
- Muestra años/meses ahorrados y el monto total de intereses evitados
- Gráfico de línea comparando la curva de saldo original vs la curva acelerada año a año

**Bancos preconfigurados:**
| Banco | Tasa anual |
|---|---|
| Banco Agrícola | 6.75% |
| Banco Hipotecario | 6.95% |
| BAC / Promerica | 7.25% |
| Scotiabank SV | 7.50% |

También acepta tasa personalizada.

---

### 📈 Calculadora de Ahorro e Inversión

Proyecta el crecimiento de un ahorro con interés compuesto a lo largo del tiempo.

**Qué calcula:**
- Saldo final proyectado con interés compuesto
- Desglose de capital aportado vs intereses generados
- Frecuencias de aporte: mensual, quincenal o semanal
- Aporte anual extraordinario (ej. aguinaldo)
- Gráfico de barras apiladas mostrando capital vs intereses por año

**Tasas de referencia del mercado salvadoreño:**
| Instrumento | Referencia |
|---|---|
| Cuentas de ahorro | ~1–3% |
| Depósito a plazo (DAP) | ~4–6% |
| CETES / Letras del Tesoro | ~5–7% |
| Fondos de pensión (AFP) | ~5–8% |

> ⚠️ **Aviso:** Esta calculadora es solo una herramienta orientativa. Los rendimientos pasados no garantizan rendimientos futuros. Consulta con un asesor financiero certificado antes de tomar decisiones de inversión.

---

## ✨ Características generales

- **PWA instalable** — instálable en móvil y escritorio directamente desde el navegador
- **Offline completo** — Service Worker con estrategia Cache-First; funciona en modo avión tras la primera carga
- **Gráficos dinámicos** — visualizaciones interactivas con Chart.js (cacheado offline por el SW)
- **Modo oscuro / claro** — toggle en el header, preferencia guardada en `localStorage`
- **Responsive** — adaptado para móvil, tablet y escritorio
- **Un solo archivo HTML** — toda la lógica en `index.html`, sin frameworks ni build tools

---

## 📂 Estructura del proyecto

```
/
├── index.html              # Aplicación completa (tres calculadoras)
├── manifest.json           # Manifiesto PWA (nombre, iconos, colores)
├── sw.js                   # Service Worker (caché offline Cache-First)
├── icons/
│   ├── icon-192x192.png    # Ícono PWA para pantalla de inicio
│   └── icon-512x512.png    # Ícono PWA splash screen
└── README.md               # Este archivo
```

---

## ⚙️ Cómo funciona el modo offline

1. Al visitar la app por primera vez con internet, el Service Worker (`sw.js`) se registra e instala.
2. Descarga y guarda en caché `index.html`, `manifest.json` y la librería Chart.js.
3. En visitas posteriores (incluso sin internet), el SW sirve todos los recursos desde el caché instantáneamente.
4. Al actualizar el archivo `sw.js` con una nueva versión (`CACHE_VERSION`), el navegador detecta el cambio, instala el nuevo SW y limpia cachés viejos automáticamente.

---

## ⚠️ Aviso legal

Esta herramienta es de referencia y orientación. Los cálculos están basados en la normativa vigente publicada por el Ministerio de Hacienda, el ISSS y la Superintendencia del Sistema Financiero de El Salvador. Para cálculos oficiales o decisiones financieras importantes, consulta con un contador o asesor financiero certificado.

---

## 👤 Autor

Desarrollado por **CodeCrewSV**

---

*Última actualización: junio 2026*
