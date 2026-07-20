import { foodData, foodOptions } from "../data/foodData";

function Controls({
  selectedFood,
  setSelectedFood,
  selectedMonth,
  setSelectedMonth,
  translations,
}) {
  const monthFormatter = new Intl.DateTimeFormat(
    translations.locale,
    {
      month: "long",
      year: "numeric",
      timeZone: "UTC",
    }
  );

  return (
    <section
      className="controls-card"
      aria-label={translations.controls.sectionLabel}
    >
      <div className="control-group">
        <label htmlFor="food-item">
          {translations.controls.foodItem}
        </label>

        <select
          id="food-item"
          value={selectedFood}
          onChange={(event) =>
            setSelectedFood(event.target.value)
          }
        >
          {foodOptions.map((food) => (
            <option key={food.value} value={food.value}>
              {translations.foods[food.value]}
            </option>
          ))}
        </select>
      </div>

      <div className="control-group">
        <label htmlFor="comparison-month">
          {translations.controls.comparisonMonth}
        </label>

        <select
          id="comparison-month"
          value={selectedMonth}
          onChange={(event) =>
            setSelectedMonth(event.target.value)
          }
        >
          {foodData.map((item) => (
            <option key={item.month} value={item.month}>
              {monthFormatter.format(
                new Date(`${item.month}-01T00:00:00Z`)
              )}
            </option>
          ))}
        </select>
      </div>
    </section>
  );
}

export default Controls;