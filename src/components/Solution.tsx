import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export function Solution() {
  const benefits = [
    {
      icon: "Target",
      title: "Карта регистров",
      description: "Чёткие правила: когда можно жаргон и иноязычие, а когда — строго литературный язык"
    },
    {
      icon: "Zap",
      title: "Тренды и неологизмы",
      description: "Как использовать новые слова уместно и не выглядеть «старпером»"
    },
    {
      icon: "Shield",
      title: "Этика платформ",
      description: "Разбор тональности для каждой соцсети: ТГ ≠ LinkedIn ≠ TikTok"
    }
  ];

  return (
    <section className="px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            Обещание пользы
          </h2>
          <p className="text-xl text-gray-300">
            После модуля ты будешь попадать в тон на любой площадке
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="p-6 bg-gradient-to-br from-green-950/40 to-blue-950/40 border-green-500/30 hover:border-green-500/60 transition-all hover-scale"
            >
              <div className="w-12 h-12 mb-4 rounded-full bg-green-500/20 flex items-center justify-center">
                <Icon name={benefit.icon} size={24} className="text-green-400" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">{benefit.title}</h3>
              <p className="text-gray-300">{benefit.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
