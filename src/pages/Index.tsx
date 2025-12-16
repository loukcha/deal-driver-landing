import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    position: '',
    phone: '',
    email: '',
    message: ''
  });
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в течение 3 часов.",
    });
    setIsOpen(false);
    setFormData({ name: '', company: '', position: '', phone: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-bank-dark via-bank-blue to-bank-dark text-white py-20 md:py-32">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Единый стандарт переговоров для кредитных менеджеров по крупным сделкам
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-gray-200 font-medium">
              Как удерживать условия и быстро проходить внутренний контур согласований
            </p>
            <p className="text-lg mb-8 text-gray-300">
              2 дня практики | 80% времени — реальные кейсы вашего банка | Для команд 12–15 человек
            </p>
            
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
              <DialogTrigger asChild>
                <Button size="lg" className="bg-success-green hover:bg-green-600 text-white font-bold text-lg px-8 py-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
                  ОСТАВИТЬ ЗАЯВКУ
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-md">
                <DialogHeader>
                  <DialogTitle>Оставить заявку</DialogTitle>
                  <DialogDescription>
                    Мы свяжемся с вами в течение 3 часов и уточним задачу департамента.
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Имя*</Label>
                    <Input id="name" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
                  </div>
                  <div>
                    <Label htmlFor="company">Банк/Компания*</Label>
                    <Input id="company" required value={formData.company} onChange={(e) => setFormData({...formData, company: e.target.value})} />
                  </div>
                  <div>
                    <Label htmlFor="position">Должность*</Label>
                    <Input id="position" required value={formData.position} onChange={(e) => setFormData({...formData, position: e.target.value})} />
                  </div>
                  <div>
                    <Label htmlFor="phone">Телефон*</Label>
                    <Input id="phone" type="tel" required value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} />
                  </div>
                  <div>
                    <Label htmlFor="email">Email*</Label>
                    <Input id="email" type="email" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
                  </div>
                  <div>
                    <Label htmlFor="message">Комментарий</Label>
                    <Textarea id="message" value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} />
                  </div>
                  <Button type="submit" className="w-full bg-success-green hover:bg-green-600">
                    Отправить заявку
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
            
            <p className="text-sm mt-4 text-gray-300 italic">
              *Мы свяжемся с вами в течение 3 часов и уточним задачу департамента.
            </p>
          </div>
          
          <div className="mt-12 grid md:grid-cols-3 gap-6 animate-fade-in">
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg">
              <Icon name="CheckCircle2" className="text-success-green" size={24} />
              <span className="text-sm font-medium">Опыт проектов в банках федерального уровня</span>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg">
              <Icon name="CheckCircle2" className="text-success-green" size={24} />
              <span className="text-sm font-medium">500+ обученных менеджеров</span>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg">
              <Icon name="CheckCircle2" className="text-success-green" size={24} />
              <span className="text-sm font-medium">20+ лет в сложных B2B‑переговорах</span>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-bank-dark">
            3 ситуации, которые «съедают» маржу, сроки и управляемость сделки
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 border-red-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start gap-3">
                  <Icon name="AlertTriangle" className="text-red-500 flex-shrink-0" size={32} />
                  <div>
                    <CardTitle className="text-xl mb-2">Уступки в момент подписания</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-3 font-medium text-gray-700">Клиент: «Дайте скидку 0,5% — и подпишем».</p>
                <p className="text-red-600 font-semibold">Итог: потери маржи + закрепляется привычка «дожимать».</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-red-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start gap-3">
                  <Icon name="AlertTriangle" className="text-red-500 flex-shrink-0" size={32} />
                  <div>
                    <CardTitle className="text-xl mb-2">Смягчение ковенантов под давлением</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-3 font-medium text-gray-700">Клиент: «Уберите отчётность/ковенанты».</p>
                <p className="text-red-600 font-semibold">Итог: банк теряет рычаги контроля рисков.</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-red-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start gap-3">
                  <Icon name="AlertTriangle" className="text-red-500 flex-shrink-0" size={32} />
                  <div>
                    <CardTitle className="text-xl mb-2">Сделка вязнет во внутреннем контуре</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-3 font-medium text-gray-700">КК, СБ, юристы возвращают на доработки.</p>
                <p className="text-red-600 font-semibold">Итог: сроки растут, клиент уходит к более быстрому конкуренту.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-bank-dark">
            Как выглядит тренинг
          </h2>
          
          <div className="relative aspect-video bg-gray-900 rounded-xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <Icon name="PlayCircle" size={80} className="mx-auto mb-4 opacity-80" />
                <p className="text-xl">Видео 60–90 секунд</p>
              </div>
            </div>
          </div>
          
          <p className="text-center mt-6 text-gray-600 italic">
            80% времени — отработка на ваших кейсах, а не лекции.
          </p>
          
          <div className="text-center mt-8">
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
              <DialogTrigger asChild>
                <Button size="lg" className="bg-bank-blue hover:bg-blue-700 text-white font-bold">
                  ОСТАВИТЬ ЗАЯВКУ
                </Button>
              </DialogTrigger>
            </Dialog>
          </div>
        </div>
      </section>

      {/* Artifacts Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-bank-dark">
            Что получит команда: рабочие инструменты
          </h2>
          <p className="text-center text-gray-600 mb-12">(фрагменты)</p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Table" className="text-bank-blue" />
                  Матрица уступок
                </CardTitle>
                <CardDescription>Что для банка дорого / дёшево</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-gradient-to-br from-blue-50 to-gray-50 p-6 rounded-lg border border-gray-200 h-48 flex items-center justify-center">
                  <Icon name="FileText" size={64} className="text-gray-300" />
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="List" className="text-bank-blue" />
                  Алгоритм ответа на кранч
                </CardTitle>
                <CardDescription>5 шагов удержания позиции</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-gradient-to-br from-blue-50 to-gray-50 p-6 rounded-lg border border-gray-200 h-48 flex items-center justify-center">
                  <Icon name="FileText" size={64} className="text-gray-300" />
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="FileCheck" className="text-bank-blue" />
                  Шаблон упаковки сделки для КК
                </CardTitle>
                <CardDescription>Структура аргументации</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-gradient-to-br from-blue-50 to-gray-50 p-6 rounded-lg border border-gray-200 h-48 flex items-center justify-center">
                  <Icon name="FileText" size={64} className="text-gray-300" />
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="BookOpen" className="text-bank-blue" />
                  Шпаргалка по ковенантам
                </CardTitle>
                <CardDescription>Логика ценности для клиента</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-gradient-to-br from-blue-50 to-gray-50 p-6 rounded-lg border border-gray-200 h-48 flex items-center justify-center">
                  <Icon name="FileText" size={64} className="text-gray-300" />
                </div>
              </CardContent>
            </Card>
          </div>
          
          <p className="text-center mt-8 text-gray-600 italic">
            Это реальные материалы программы. Оформление и формулировки адаптируются под ваш банк.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-bank-dark">
            5 навыков, которые начинают применять сразу после тренинга
          </h2>
          
          <div className="space-y-6">
            {[
              {
                number: "01",
                title: "Кранчи (скидка «в конце»)",
                description: "Что отвечать, чтобы удерживать позицию без конфликта."
              },
              {
                number: "02",
                title: "Защита ковенантов",
                description: "Как объяснять ценность контроля и переводить давление в обмен."
              },
              {
                number: "03",
                title: "Модель обмена уступками",
                description: "«Если вы… то мы…» + матрица уступок."
              },
              {
                number: "04",
                title: "Манипуляции/давление",
                description: "Спокойные ответы без оправданий и агрессии."
              },
              {
                number: "05",
                title: "Обоснование цены и условий",
                description: "Перенос фокуса с «дорого» на «выгодно/безопасно»."
              }
            ].map((skill) => (
              <Card key={skill.number} className="border-l-4 border-l-success-green hover:shadow-lg transition-shadow">
                <CardContent className="flex gap-6 items-start p-6">
                  <div className="text-5xl font-bold text-success-green/20 flex-shrink-0">
                    {skill.number}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-bank-dark">{skill.title}</h3>
                    <p className="text-gray-700">{skill.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Feature Section - Internal Approvals */}
      <section className="py-20 bg-gradient-to-br from-bank-blue to-bank-dark text-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-8">
            <div className="inline-block bg-success-green text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
              КЛЮЧЕВАЯ ОСОБЕННОСТЬ
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Встроенный модуль: внутренние согласования (КК, СБ, юристы)
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Большинство программ концентрируются только на клиенте. 
              Здесь отрабатывается управление сделкой и <strong>внутри банка</strong>: 
              как ускорять прохождение сделки и уменьшать ручные эскалации.
            </p>
          </div>
          
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardHeader>
              <CardTitle className="text-white text-2xl">Что отрабатываем на кейсах участников:</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-4 items-start">
                <Icon name="CheckCircle2" className="text-success-green flex-shrink-0 mt-1" size={24} />
                <p className="text-lg">Как «упаковать» сделку под логику КК.</p>
              </div>
              <div className="flex gap-4 items-start">
                <Icon name="CheckCircle2" className="text-success-green flex-shrink-0 mt-1" size={24} />
                <p className="text-lg">Как отвечать на типовые возражения СБ/юристов без конфликта.</p>
              </div>
              <div className="flex gap-4 items-start">
                <Icon name="CheckCircle2" className="text-success-green flex-shrink-0 mt-1" size={24} />
                <p className="text-lg">Как снижать нагрузку на руководителя как «единственную точку решения».</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Training Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-bank-dark">
            Как проходит тренинг
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-t-4 border-t-bank-blue">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Icon name="Calendar" className="text-bank-blue" size={32} />
                  <CardTitle className="text-2xl">До тренинга</CardTitle>
                </div>
                <CardDescription className="text-base">1–2 недели</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li>• Интервью с руководителем</li>
                  <li>• Сбор кейсов участников</li>
                  <li>• Адаптация упражнений</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-success-green">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Icon name="Users" className="text-success-green" size={32} />
                  <CardTitle className="text-2xl">2 дня очно</CardTitle>
                </div>
                <CardDescription className="text-base">16 часов практики</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <p className="font-semibold text-gray-800">День 1:</p>
                    <p className="text-gray-700">Кранчи, ковенанты, обмен уступками</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">День 2:</p>
                    <p className="text-gray-700">Давление/манипуляции + внутренний контур + финальная симуляция</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-bank-blue">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Icon name="TrendingUp" className="text-bank-blue" size={32} />
                  <CardTitle className="text-2xl">После</CardTitle>
                </div>
                <CardDescription className="text-base">Поддержка</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li>• 2 недели поддержки</li>
                  <li>• Разбор сложных кейсов</li>
                  <li>• Повторная онлайн-сессия через месяц</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-bank-dark">
            Практические результаты после внедрения
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-l-4 border-l-success-green hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl flex items-start gap-3">
                  <Icon name="TrendingDown" className="text-success-green flex-shrink-0" size={32} />
                  <span>Меньше безусловных уступок</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg mb-4">
                  Частота безусловных уступок сокращается в <strong className="text-success-green text-2xl">1,5–2 раза</strong> в первые 2–3 месяца.
                </p>
                <p className="text-sm text-gray-600 italic">
                  *Оценка по анкетированию руководителей/участников через 6–12 недель и разбору типовых кейсов до/после.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-success-green hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl flex items-start gap-3">
                  <Icon name="Shield" className="text-success-green flex-shrink-0" size={32} />
                  <span>Устойчивее защита ковенантов</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg mb-4">
                  Доля сделок с сохранёнными ключевыми ковенантами растёт на <strong className="text-success-green text-2xl">30–40%</strong>.
                </p>
                <p className="text-sm text-gray-600 italic">
                  *Оценка по анкетированию руководителей/участников через 6–12 недель и разбору типовых кейсов до/после.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-success-green hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl flex items-start gap-3">
                  <Icon name="Zap" className="text-success-green flex-shrink-0" size={32} />
                  <span>Быстрее внутренние согласования</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg mb-4">
                  Время внутренних согласований сокращается на <strong className="text-success-green text-2xl">20–35%</strong> за счёт правильной «упаковки» сделки.
                </p>
                <p className="text-sm text-gray-600 italic">
                  *Оценка по анкетированию руководителей/участников через 6–12 недель и разбору типовых кейсов до/после.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-success-green hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl flex items-start gap-3">
                  <Icon name="Target" className="text-success-green flex-shrink-0" size={32} />
                  <span>Единый стандарт поведения</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg">
                  Команда меньше «плавает» в сложных переговорах и действует по согласованной логике.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-bank-dark to-bank-blue text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Готовы внедрить единый стандарт переговоров?
          </h2>
          <p className="text-xl mb-8 text-gray-200">
            Оставьте заявку — мы свяжемся с вами в течение 3 часов и обсудим задачи вашего департамента.
          </p>
          
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <Button size="lg" className="bg-success-green hover:bg-green-600 text-white font-bold text-xl px-12 py-8 rounded-lg shadow-2xl hover:shadow-3xl transition-all">
                ОСТАВИТЬ ЗАЯВКУ
              </Button>
            </DialogTrigger>
          </Dialog>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-bank-dark text-gray-400 py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Тренинг «Драйвер сделки»</h3>
            <p className="mb-2">Единый стандарт переговоров для кредитных менеджеров</p>
            <p className="text-sm">© 2024 Все права защищены</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
