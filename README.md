# CalculaSV 💵

**Herramientas financieras para El Salvador — 100% offline, sin dependencias externas.**

Aplicación web de una sola página (`index.html`) con dos calculadoras integradas: salario neto y cuota hipotecaria. Funciona directamente desde el navegador, sin servidor, sin internet, sin instalación.

---

## 🚀 Demo en vivo

> `https://luisom13.github.io/calculadoras/`

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
- **Quincena 25** — 50% del salario mensual, libre de ISR, ISSS y AFP; proporcional si el empleado tiene menos de 1 año. Aplica a salarios ≤ $1,500/mes (pago entre el 15 y 25 de enero)

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
- Quincena 25: Decreto Legislativo vigente desde 2026 (obligatorio sector público; privado obligatorio desde 2027)

---

### 🏠 Calculadora Hipotecaria
Calcula la cuota mensual real de un préstamo hipotecario incluyendo los seguros obligatorios en El Salvador.

**Qué calcula:**
- Cuota mensual (capital + intereses, método francés)
- Seguro de deuda / vida: **0.038%/mes** sobre el saldo del préstamo
- Seguro de daños (incendio/terremoto): **0.025%/mes** sobre el 70% del precio
- Total a pagar, total de intereses y prima inicial

**Bancos preconfigurados:**
| Banco | Tasa anual |
|---|---|
| Banco Agrícola | 6.75% |
| Banco Hipotecario | 6.95% |
| BAC / Promerica | 7.25% |
| Scotiabank SV | 7.50% |

También acepta tasa personalizada.

**Visualización:** gráfico donut animado con la distribución capital / intereses / seguros.

---

## ✨ Características generales

- **100% offline** — no requiere internet después de la primera carga. Sin Google Fonts, sin CDN, sin APIs externas
- **Modo oscuro / claro** — toggle en el header, preferencia guardada en `localStorage`
- **Responsive** — adaptado para móvil, tablet y escritorio
- **Compatible con iPhone home screen** — se puede agregar a la pantalla de inicio como app
- **Sin frameworks** — HTML, CSS y JavaScript puro. Sin React, sin Vue, sin dependencias
- **Un solo archivo** — todo el código en `index.html`

---

## 📂 Estructura del proyecto

```
/
├── index.html      # Aplicación completa (ambas calculadoras)
└── README.md       # Este archivo
```

---

## ⚠️ Aviso legal

Esta herramienta es de referencia y orientación. Los cálculos están basados en la normativa vigente publicada por el Ministerio de Hacienda, el ISSS y la Superintendencia del Sistema Financiero de El Salvador. Para cálculos oficiales o decisiones financieras importantes, consulta con un contador o asesor financiero certificado.

---

## 👤 Autor

Desarrollado por **CodeCrewSV**

---

*Última actualización: junio 2026*
