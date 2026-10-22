# 🎨 Resistencias por Código de Colores

Aplicación web para calcular el valor de una resistencia eléctrica a partir de sus bandas de colores. Este proyecto busca facilitar el aprendizaje de los fundamentos de electricidad y electrónica mediante una herramienta interactiva y fácil de utilizar.

## 🚀 Características

- **Selección de colores:** permite seleccionar los colores de las bandas de una resistencia.
- **Cálculo automático:** determina el valor de la resistencia en ohmios (Ω) a partir de los colores seleccionados.
- **Multiplicador:** aplica el factor multiplicador correspondiente para obtener el valor final.
- **Tolerancia:** muestra el porcentaje de tolerancia de la resistencia.
- **Interfaz interactiva:** permite experimentar con diferentes combinaciones de colores y observar los resultados.

## 🛠️ Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript

## ⚙️ Funcionamiento

La aplicación utiliza el código de colores estándar de las resistencias eléctricas para interpretar sus bandas.

En una resistencia de cuatro bandas:

1. **Primera banda:** representa el primer dígito significativo.
2. **Segunda banda:** representa el segundo dígito significativo.
3. **Tercera banda:** indica el multiplicador.
4. **Cuarta banda:** indica la tolerancia.

### Ejemplo de cálculo

Una resistencia con las siguientes bandas:

| Banda | Color | Valor |
|---|---|---:|
| Primera | Amarillo | 4 |
| Segunda | Violeta | 7 |
| Tercera | Rojo | ×100 |
| Cuarta | Dorado | ±5% |

**Resultado:** 4.700 Ω (4,7 kΩ) con una tolerancia de ±5%.

## 💻 Instalación y ejecución

1. Clona el repositorio:

   ```bash
   git clone https://github.com/EspiSebas/Resistencias-Colores.git
   ```

2. Accede a la carpeta del proyecto:

   ```bash
   cd Resistencias-Colores
   ```

3. Abre el archivo `index.html` en tu navegador para utilizar la aplicación.

   Si el proyecto utiliza otro archivo HTML como punto de entrada, abre el archivo correspondiente.

## 🎯 Objetivo del proyecto

Desarrollar una herramienta práctica que facilite la identificación del valor de las resistencias eléctricas y refuerce los conocimientos sobre el código de colores utilizado en componentes electrónicos.

Este proyecto también permite poner en práctica conceptos de programación web, manipulación del DOM, manejo de eventos y operaciones matemáticas con JavaScript.

## 👨‍💻 Autor

**Sebastián Espinosa**

- GitHub: [@EspiSebas](https://github.com/EspiSebas)

---

Proyecto desarrollado con fines educativos y de aprendizaje de programación web y electrónica.
