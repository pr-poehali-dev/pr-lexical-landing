import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export function LexicalTypes() {
  const types = [
    {
      category: "Происхождение слов",
      items: [
        { label: "Исконные", example: "работа, земля, свой", usage: "Для теплоты и близости" },
        { label: "Заимствованные", example: "таргет, лид, engagement", usage: "Для digital-тусовки" },
        { label: "Старославянские", example: "град, благо, вещать", usage: "Для пафоса и торжественности" },
        { label: "Интернационализмы", example: "менеджер, тренд, контент", usage: "Универсально для бизнеса" }
      ]
    },
    {
      category: "Временные пласты",
      items: [
        { label: "Устаревшее", example: "вирусный → виральный", usage: "Избегать или использовать иронично" },
        { label: "Неологизм", example: "войсить (записать голосовое)", usage: "⚠️ Риск: не все поймут" }
      ]
    },
    {
      category: "Социолекты",
      items: [
        { label: "Диалектизм", example: "бурак (свёкла)", usage: "Только для локального колорита" },
        { label: "Термин", example: "CPM, CTR, охваты", usage: "Для профессионального контента" },
        { label: "Жаргонизм", example: "хайп, краш, вайб", usage: "Уместен в сторис, неуместен в пресс-релизе" }
      ]
    }
  ];

  return (
    <section className="px-6 py-20 bg-gradient-to-b from-purple-950/30 to-transparent">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Что узнаешь: типы лексики
        </h2>
        <p className="text-center text-gray-300 mb-12 text-lg">
          От исконных слов до платформенных жаргонизмов
        </p>
        
        <div className="space-y-8">
          {types.map((type, idx) => (
            <Card key={idx} className="p-8 bg-gradient-to-br from-purple-950/60 to-pink-950/60 border-purple-500/30">
              <h3 className="text-2xl font-bold mb-6 text-purple-300">{type.category}</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {type.items.map((item, i) => (
                  <div key={i} className="space-y-2">
                    <Badge variant="outline" className="border-purple-400 text-purple-300 mb-2">
                      {item.label}
                    </Badge>
                    <div className="bg-black/30 p-4 rounded-lg">
                      <p className="text-white font-mono mb-2">→ {item.example}</p>
                      <p className="text-sm text-gray-400">{item.usage}</p>
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
