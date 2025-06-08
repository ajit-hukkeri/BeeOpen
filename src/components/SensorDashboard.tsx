import React from 'react';

const SensorDashboard = () => {
  const charts = [
    {
      title: 'Temperature Inside',
      src: 'https://thingspeak.com/channels/2886027/charts/3?bgcolor=%23ffffff&color=%23ffa500&dynamic=true&results=60&type=line',
    },
    {
      title: 'Temperature Outside',
      src: 'https://thingspeak.com/channels/2886027/charts/1?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&type=line',
    },
    {
      title: 'Humidity Inside',
      src: 'https://thingspeak.com/channels/2886027/charts/4?bgcolor=%23ffffff&color=%2300cc44&dynamic=true&results=60&type=line',
    },
    {
      title: 'Humidity Outside',
      src: 'https://thingspeak.com/channels/2886027/charts/2?bgcolor=%23ffffff&color=%230080ff&dynamic=true&results=60&type=line',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-amber-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">
            Live Sensor Dashboard
          </h2>
          <p className="text-xl text-amber-700 max-w-3xl mx-auto">
            Real-time sensor data visualized from inside and outside the hive
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {charts.map(({ title, src }) => (
            <div key={title} className="bg-white rounded-2xl shadow-xl p-4 border border-amber-100">
              <h3 className="text-xl font-semibold text-amber-800 mb-2">{title}</h3>
              <iframe
                title={title}
                width="100%"
                height="260"
                style={{ border: '1px solid #ccc' }}
                src={src}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SensorDashboard;