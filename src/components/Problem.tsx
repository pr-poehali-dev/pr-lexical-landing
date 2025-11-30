import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export function Problem() {
  const problems = [
    {
      icon: "AlertCircle",
      title: "Промахнулся со стилем",
      description: "Использовал устаревшие слова в сторис или жаргон в корпоративном посте"
    },
    {
      icon: "Ban",
      title: "Нарушил этику площадки",
      description: "То, что заходит в ТГ-канале, может провалиться в Workplace"
    },
    {
      icon: "TrendingDown",
      title: "Потерял аудиторию",
      description: "Контент не попал в тон — подписчики не считывают посыл"
    }
  ];

  return (
    <section className="px-6 py-20 bg-gradient-to-b from-transparent to-purple-950/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
            Главный барьер соцмедиа-мейкера
          </h2>
          <p className="text-xl text-gray-300">
            «Зачем мне эта лексическая типология в PR?»
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
            <Card 
              key={index} 
              className="p-6 bg-gradient-to-br from-red-950/40 to-orange-950/40 border-red-500/30 hover:border-red-500/60 transition-all hover-scale"
            >
              <div className="w-12 h-12 mb-4 rounded-full bg-red-500/20 flex items-center justify-center">
                <Icon name={problem.icon} size={24} className="text-red-400" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">{problem.title}</h3>
              <p className="text-gray-300">{problem.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}