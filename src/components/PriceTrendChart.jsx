import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { foodData, foodOptions } from "../data/foodData";

function PriceTrendChart({ selectedFood, translations }) {
  const selectedFoodOption = foodOptions.find(
    (food) => food.value === selectedFood
  );

  const foodLabel =
    translations.foods[selectedFoodOption?.value] ?? "Food";

  const monthFormatter = new Intl.DateTimeFormat(
    translations.locale,
    {
      month: "short",
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

  const chartData = foodData.map((item) => ({
    month: monthFormatter.format(
      new Date(`${item.month}-01T00:00:00Z`)
    ),
    price: item[selectedFood],
  }));

  return (
    <article className="chart-card">
      <div className="card-heading">
        <div>
          <p className="card-label">
            {translations.trendChart.label}
          </p>

          <h2 aria-live="polite">
            {translations.trendChart.titlePrefix} {foodLabel}
          </h2>
        </div>

        <span className="status-badge">
          {translations.trendChart.unit}
        </span>
      </div>

      <p className="card-description">
        {translations.trendChart.description}
      </p>

      <div
       className="chart-container"
       role="img"
       aria-label={`${translations.trendChart.label}: ${foodLabel}. ${translations.trendChart.description}`}
   >
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
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
              dataKey="month"
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
              domain={["dataMin - 0.5", "dataMax + 0.5"]}
            />

            <Tooltip
              formatter={(value) => [
                currencyFormatter.format(value),
                translations.trendChart.tooltipLabel,
              ]}
              labelFormatter={(label) =>
                `${translations.trendChart.tooltipMonth}: ${label}`
              }
            />

            <Line
              type="monotone"
              dataKey="price"
              stroke="#1D4ED8"
              strokeWidth={3}
              dot={{
                r: 4,
                fill: "#FFFFFF",
                stroke: "#1D4ED8",
                strokeWidth: 2,
              }}
              activeDot={{
                r: 6,
                fill: "#E07A5F",
                stroke: "#FFFFFF",
                strokeWidth: 2,
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </article>
  );
}

export default PriceTrendChart;