import React from 'react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  LabelList,
  Label,
} from 'recharts';

const Chart = ({ articles }) => {
  let sources = [];
  let data = [];

  for (let article of articles) {
    sources.push(article.source.name);
  }

  for (let source of sources) {
    if (data.some((obj) => obj['name'] === source)) {
      data.forEach((obj) => {
        if (obj.name === source) {
          obj.articles++;
        }
      });
    } else {
      data.push({
        name: source,
        articles: 1,
        empty: '',
      });
    }
  }

  console.log(data);

  return data.length > 0 ? (
    <div className="chart">
      <h2 className="chart__title">Where is your news coming from?</h2>
      <ResponsiveContainer width={700} height="80%">
        <BarChart
          width={730}
          height={250}
          data={data}
          barCategoryGap="10%"
          margin={{ top: 50, right: 50 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="empty">
            <Label
              value="Source Name"
              position="insideBottom"
              style={{ fill: '#fff' }}
            />
          </XAxis>
          <YAxis tick={{ fontSize: 10 }}>
            <Label value="# of Articles" style={{ fill: '#fff' }} angle="-90" />
          </YAxis>
          <Tooltip cursor={false} />

          <Bar dataKey="articles" fill="#a9a9a9">
            <LabelList dataKey="name" position="top" style={{ fill: '#fff' }} />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : null;
};

export default Chart;
