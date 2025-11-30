import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export function CTA() {
  return (
    <section className="px-6 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 animate-pulse"></div>
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Готов к улучшению своих скилов?</h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Записывайся на модуль «Лексическая типология» и получи карту регистров для любой площадки
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8">
                Записаться на модуль
                <Icon name="Rocket" size={20} />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8">
                Узнать подробнее
              </Button>
            </div>
            
            <div className="mt-8 flex items-center justify-center gap-6 text-purple-100">
              <div className="flex items-center gap-2">
                <Icon name="Users" size={20} />
                <span>500+ студентов</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Star" size={20} />
                <span>4.9/5 рейтинг</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Clock" size={20} />
                <span>8 часов контента</span>
              </div>
            </div>
          </div>
        </div>
        
        <p className="mt-8 text-gray-400">
          Онлайн-школа PRo · Повышение грамотности для PR-специалистов
        </p>
      </div>
    </section>
  );
}