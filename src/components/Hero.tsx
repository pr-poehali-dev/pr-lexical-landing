import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export function Hero() {
  return (
    <section className="relative overflow-hidden px-6 py-20 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-pink-500/20 to-blue-500/20 animate-pulse"></div>
      
      <div className="relative max-w-6xl mx-auto text-center">
        <div className="inline-block mb-6 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-medium text-white animate-fade-in">
          PRo · Онлайн-школа грамотности
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">Black & white</h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto animate-fade-in">КЛЯНЕМСЯ, БОЛЬШЕ КРИНЖА НЕ БУДЕТ!</p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
          <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-lg px-8">
            Записаться на модуль
            <Icon name="ArrowRight" size={20} />
          </Button>
          <Button size="lg" variant="outline" className="border-purple-400 text-purple-400 hover:bg-purple-400/10 text-lg px-8">
            Смотреть программу
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" size={32} className="text-purple-400" />
      </div>
    </section>
  );
}