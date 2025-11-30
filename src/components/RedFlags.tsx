import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export function RedFlags() {
  const mistakes = [
    {
      type: "Канцелярит",
      bad: "Осуществление мероприятия по повышению узнаваемости бренда",
      good: "Запускаем кампанию для узнаваемости бренда",
      why: "Канцелярит убивает живость. Используй глаголы действия."
    },
    {
      type: "Инвективы",
      bad: "Конкуренты — полные идиоты",
      good: "Наше решение выгоднее, чем у конкурентов",
      why: "Оскорбления — этический провал. Сравнивай по фактам."
    },
    {
      type: "Псевдонаучие",
      bad: "Инновационная парадигма синергетического коллаборирования",
      good: "Новый подход к совместной работе",
      why: "Пустые термины не убеждают. Говори конкретно."
    }
  ];

  return (
    <section className="px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <Icon name="AlertTriangle" size={40} className="text-red-400" />
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
              Красные флажки
            </h2>
          </div>
          <p className="text-gray-300 text-lg">
            Ошибки, которые портят контент (и как их избежать)
          </p>
        </div>
        
        <div className="space-y-6">
          {mistakes.map((mistake, idx) => (
            <Card key={idx} className="p-6 bg-gradient-to-br from-red-950/40 to-orange-950/40 border-red-500/30 hover:border-red-500/60 transition-all">
              <div className="flex items-start gap-4 mb-4">
                <Badge variant="destructive" className="bg-red-600">
                  {mistake.type}
                </Badge>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="bg-black/40 p-4 rounded-lg border border-red-500/30">
                  <div className="flex items-center gap-2 mb-2">
                    <Icon name="X" size={20} className="text-red-400" />
                    <span className="text-red-400 font-bold">Плохо</span>
                  </div>
                  <p className="text-gray-300">{mistake.bad}</p>
                </div>
                
                <div className="bg-black/40 p-4 rounded-lg border border-green-500/30">
                  <div className="flex items-center gap-2 mb-2">
                    <Icon name="Check" size={20} className="text-green-400" />
                    <span className="text-green-400 font-bold">Хорошо</span>
                  </div>
                  <p className="text-gray-300">{mistake.good}</p>
                </div>
              </div>
              
              <div className="bg-blue-950/40 p-4 rounded-lg border border-blue-500/30">
                <div className="flex items-start gap-2">
                  <Icon name="Lightbulb" size={20} className="text-blue-400 mt-0.5" />
                  <p className="text-blue-300"><span className="font-bold">Почему:</span> {mistake.why}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
