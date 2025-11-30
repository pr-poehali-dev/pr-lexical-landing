import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export function Dictionaries() {
  const dictionaries = [
    {
      question: "Как правильно писать?",
      dictionary: "Орфографический словарь",
      icon: "BookCheck"
    },
    {
      question: "Что означает термин?",
      dictionary: "Толковый словарь",
      icon: "BookOpen"
    },
    {
      question: "Как произносить?",
      dictionary: "Орфоэпический словарь",
      icon: "Volume2"
    },
    {
      question: "Где ставить ударение?",
      dictionary: "Словарь ударений",
      icon: "Music"
    },
    {
      question: "Как слово сочетается?",
      dictionary: "Словарь сочетаемости",
      icon: "Link"
    },
    {
      question: "Есть ли синоним?",
      dictionary: "Словарь синонимов",
      icon: "Replace"
    }
  ];

  return (
    <section className="px-6 py-20 bg-gradient-to-b from-transparent to-purple-950/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
          Карта словарей для PR
        </h2>
        <p className="text-center text-gray-300 mb-12 text-lg">
          Какой вопрос — в какой словарь идти
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dictionaries.map((dict, idx) => (
            <Card key={idx} className="p-6 bg-gradient-to-br from-yellow-950/40 to-orange-950/40 border-yellow-500/30 hover:border-yellow-500/60 transition-all hover-scale">
              <div className="w-12 h-12 mb-4 rounded-full bg-yellow-500/20 flex items-center justify-center">
                <Icon name={dict.icon} size={24} className="text-yellow-400" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-yellow-300">{dict.question}</h3>
              <p className="text-white font-medium">{dict.dictionary}</p>
            </Card>
          ))}
        </div>
        
        <Card className="mt-8 p-6 bg-gradient-to-br from-yellow-950/60 to-orange-950/60 border-yellow-500/30">
          <h3 className="text-xl font-bold mb-4 text-yellow-300">Структура словарной статьи:</h3>
          <div className="bg-black/40 p-4 rounded-lg font-mono text-sm text-gray-300 space-y-1">
            <p><span className="text-yellow-400">Заголовок:</span> слово с ударением</p>
            <p><span className="text-yellow-400">Толкование:</span> значение в контексте</p>
            <p><span className="text-yellow-400">Примеры:</span> использование в предложениях</p>
            <p><span className="text-yellow-400">Помета:</span> стиль (разг., книжн., проф.)</p>
          </div>
        </Card>
      </div>
    </section>
  );
}
