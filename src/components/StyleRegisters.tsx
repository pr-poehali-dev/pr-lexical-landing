import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export function StyleRegisters() {
  const examples = [
    {
      theme: "Запуск нового продукта",
      variants: [
        { register: "Книжный", text: "Презентация инновационного решения", effect: "Официально, дистанция" },
        { register: "Нейтральный", text: "Запуск нового продукта", effect: "Универсально, понятно" },
        { register: "Разговорный", text: "Выкатили новинку 🔥", effect: "Близко, по-свойски" }
      ]
    },
    {
      theme: "Приглашение на вебинар",
      variants: [
        { register: "Книжный", text: "Приглашаем к участию в образовательном мероприятии", effect: "Формально, скучно" },
        { register: "Нейтральный", text: "Регистрация на вебинар открыта", effect: "Деловито, корректно" },
        { register: "Разговорный", text: "Заходи на эфир, будет огонь 🚀", effect: "Энергично, молодёжно" }
      ]
    }
  ];

  return (
    <section className="px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Стилистические регистры
        </h2>
        <p className="text-center text-gray-300 mb-12 text-lg">
          Один смысл — три эффекта в заголовке
        </p>
        
        <div className="space-y-8">
          {examples.map((example, idx) => (
            <Card key={idx} className="p-8 bg-gradient-to-br from-blue-950/60 to-cyan-950/60 border-blue-500/30">
              <h3 className="text-xl font-bold mb-6 text-blue-300">Тема: {example.theme}</h3>
              <div className="space-y-4">
                {example.variants.map((variant, i) => (
                  <div key={i} className="flex flex-col md:flex-row md:items-center gap-4 bg-black/30 p-4 rounded-lg hover-scale">
                    <Badge 
                      variant="outline" 
                      className={`self-start ${
                        variant.register === 'Книжный' ? 'border-purple-400 text-purple-300' :
                        variant.register === 'Нейтральный' ? 'border-blue-400 text-blue-300' :
                        'border-green-400 text-green-300'
                      }`}
                    >
                      {variant.register}
                    </Badge>
                    <div className="flex-1">
                      <p className="text-white font-medium mb-1">{variant.text}</p>
                      <p className="text-sm text-gray-400">Эффект: {variant.effect}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
