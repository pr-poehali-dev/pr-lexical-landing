import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from '@/components/ui/card';

export function Glossary() {
  const terms = [
    {
      term: "Лексическая типология",
      definition: "Классификация слов по происхождению, времени, стилю и социальной принадлежности.",
      example: "В PR помогает выбирать слова под аудиторию и платформу."
    },
    {
      term: "Стилистический регистр",
      definition: "Уровень формальности речи: книжный, нейтральный, разговорный.",
      example: "LinkedIn = нейтральный, сторис = разговорный."
    },
    {
      term: "Неологизм",
      definition: "Новое слово, ещё не прижившееся в языке.",
      example: "«Войсить» (записать голосовое) — рискованно для корпоративного блога."
    },
    {
      term: "Жаргонизм",
      definition: "Слово из профессионального или молодёжного сленга.",
      example: "«Хайпануть» уместен в ТГ, но не в пресс-релизе."
    },
    {
      term: "Канцелярит",
      definition: "Перегруженный бюрократическими оборотами стиль.",
      example: "«Осуществление мероприятия» → «Проведение события»."
    },
    {
      term: "Инвектива",
      definition: "Резкое оскорбительное высказывание.",
      example: "Табу для любого PR-текста: портит репутацию."
    },
    {
      term: "Диалектизм",
      definition: "Слово, характерное для определённого региона.",
      example: "«Бурак» (свёкла) — только для локального колорита."
    },
    {
      term: "Интернационализм",
      definition: "Слово, одинаковое во многих языках.",
      example: "«Менеджер», «контент» — универсальны для бизнеса."
    },
    {
      term: "Тональность",
      definition: "Эмоциональная окраска текста: дружелюбная, нейтральная, официальная.",
      example: "В сторис — дружелюбная, в B2B-письме — нейтральная."
    },
    {
      term: "Уместность",
      definition: "Соответствие слова контексту, аудитории и платформе.",
      example: "«Крутяк» уместен в TikTok, неуместен в годовом отчёте."
    },
    {
      term: "Терминология",
      definition: "Профессиональные слова с точным значением.",
      example: "«CPM», «engagement» — обязательны в отчётах для клиента."
    },
    {
      term: "Просторечие",
      definition: "Ненормативная разговорная лексика.",
      example: "Использовать только для специальных эффектов (ирония, персонаж)."
    }
  ];

  return (
    <section className="px-6 py-20 bg-gradient-to-b from-purple-950/30 to-transparent">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Глоссарий
        </h2>
        <p className="text-center text-gray-300 mb-12 text-lg">
          12 терминов с PR-примерами
        </p>
        
        <Card className="p-6 bg-gradient-to-br from-purple-950/60 to-pink-950/60 border-purple-500/30">
          <Accordion type="single" collapsible className="w-full">
            {terms.map((item, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="border-purple-500/30">
                <AccordionTrigger className="text-left text-lg font-bold text-purple-300 hover:text-purple-200">
                  {item.term}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  <p className="mb-2">{item.definition}</p>
                  <div className="bg-black/40 p-3 rounded-lg mt-2 border-l-4 border-purple-500">
                    <span className="text-purple-400 font-semibold">PR-пример:</span> {item.example}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Card>
      </div>
    </section>
  );
}
