import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { foodData, foodOptions } from "../data/foodData";

function PriceComparisonChart({
  selectedMonth,
  translations,
}) {
  const selectedMonthData = foodData.find(
    (item) => item.month === selectedMonth
  );

  const monthFormatter = new Intl.DateTimeFormat(
    translations.locale,
    {
      month: "long",
      year: "numeric",
      timeZone: "UTC",
    }
  );

  const currencyFormatter = new Intl.NumberFormat(
    translations.locale,
    {
      style: "currency",
      currency: "CAD",
      minimumFractionDigits: 2,
    }
  );

  const formattedMonth = monthFormatter.format(
    new Date(`${selectedMonth}-01T00:00:00Z`)
  );

  const chartData = foodOptions.map((food) => ({
    food: translations.foods[food.value],
    price: selectedMonthData?.[food.value] ?? 0,
  }));

  return (
    <article className="chart-card">
      <div className="card-heading">
        <div>
          <p className="card-label">
            {translations.comparisonChart.label}
          </p>

          <h2 aria-live="polite">
            {translations.comparisonChart.titlePrefix}{" "}
            {formattedMonth}
          </h2>
        </div>

        <span className="status-badge">
          {translations.comparisonChart.unit}
        </span>
      </div>

      <p className="card-description">
        {translations.comparisonChart.description}
      </p>

      <div
        className="chart-container"
        role="img"
        aria-label={`${translations.comparisonChart.label}. ${translations.comparisonChart.titlePrefix} ${formattedMonth}. ${translations.comparisonChart.description}`}
    >
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={chartData}
            margin={{
              top: 15,
              right: 20,
              left: 5,
              bottom: 5,
            }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
            />

            <XAxis
              dataKey="food"
              tickLine={false}
              axisLine={false}
            />

            <YAxis
              tickFormatter={(value) =>
                currencyFormatter.format(value)
              }
              tickLine={false}
              axisLine={false}
              width={58}
              domain={[0, "dataMax + 1"]}
            />

            <Tooltip
              formatter={(value) => [
                currencyFormatter.format(value),
                translations.comparisonChart.tooltipLabel,
              ]}
            />

            <Bar
              dataKey="price"
              fill="#81B29A"
              radius={[8, 8, 0, 0]}
              maxBarSize={54}
              activeBar={{
                fill: "#E07A5F",
              }}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </article>
  );
}

export default PriceComparisonChart;