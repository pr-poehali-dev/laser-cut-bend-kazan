import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  const services = [
    {
      icon: 'Scissors',
      title: 'Лазерная резка',
      description: 'Высокоточная резка металла толщиной до 20 мм. Сложные контуры и геометрия.'
    },
    {
      icon: 'Move',
      title: 'Гибка металла',
      description: 'Листогибочные работы любой сложности. Точность до 0.1 мм.'
    },
    {
      icon: 'Sparkles',
      title: 'Сварочные работы',
      description: 'Все виды сварки: аргонодуговая, полуавтоматическая, точечная.'
    },
    {
      icon: 'Paintbrush',
      title: 'Порошковая покраска',
      description: 'Полимерное покрытие с высокой стойкостью к коррозии и износу.'
    }
  ];

  const portfolio = [
    { title: 'Металлоконструкции для ТЦ', category: 'Торговое оборудование' },
    { title: 'Элементы фасада здания', category: 'Строительство' },
    { title: 'Детали для спецтехники', category: 'Промышленность' },
    { title: 'Рекламные конструкции', category: 'Реклама' },
    { title: 'Корпуса оборудования', category: 'Электротехника' },
    { title: 'Декоративные элементы', category: 'Архитектура' }
  ];

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Factory" size={32} className="text-secondary" />
            <div>
              <h1 className="text-xl font-bold text-primary">КазаньЛазерМК</h1>
              <p className="text-xs text-muted-foreground">Производство с 2010 года</p>
            </div>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#services" className="text-sm font-medium hover:text-secondary transition-colors">Услуги</a>
            <a href="#portfolio" className="text-sm font-medium hover:text-secondary transition-colors">Портфолио</a>
            <a href="#contacts" className="text-sm font-medium hover:text-secondary transition-colors">Контакты</a>
          </nav>
          <Button className="bg-accent hover:bg-accent/90">
            <Icon name="Phone" size={16} className="mr-2" />
            +7 (843) 123-45-67
          </Button>
        </div>
      </header>

      <section className="pt-32 pb-20 bg-gradient-to-br from-primary via-primary/95 to-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Лазерная резка и гибка металла в Казани
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Профессиональная обработка металла с гарантией качества. Выполняем заказы любой сложности от единичных изделий до крупных серий.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white">
                <Icon name="FileText" size={20} className="mr-2" />
                Оставить заявку
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 text-white border-white/30 hover:bg-white/20">
                <Icon name="Download" size={20} className="mr-2" />
                Скачать прайс
              </Button>
            </div>
            <div className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-white/20">
              <div>
                <div className="text-4xl font-bold text-white mb-2">15+</div>
                <div className="text-white/80 text-sm">лет опыта</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">2000+</div>
                <div className="text-white/80 text-sm">проектов</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">100%</div>
                <div className="text-white/80 text-sm">гарантия</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Наши услуги</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Полный цикл металлообработки на современном оборудовании с сертификатами качества
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow border-2 hover:border-secondary">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={service.icon} size={24} className="text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-12 bg-white rounded-lg p-8 border-2 border-accent/20">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon name="Award" size={24} className="text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary mb-2">Сертификаты качества</h3>
                <p className="text-muted-foreground">
                  Все работы выполняются в строгом соответствии с ГОСТ. Предоставляем документацию на материалы и паспорта качества.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Портфолио работ</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Примеры реализованных проектов в различных отраслях
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolio.map((project, idx) => (
              <Card key={idx} className="overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="h-48 bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center">
                  <Icon name="Image" size={48} className="text-muted-foreground/30 group-hover:scale-110 transition-transform" />
                </div>
                <CardContent className="p-6">
                  <div className="text-xs font-semibold text-secondary mb-2">{project.category}</div>
                  <h3 className="text-lg font-bold text-primary">{project.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-6">Свяжитесь с нами</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Оставьте заявку и получите консультацию специалиста в течение 15 минут
              </p>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Имя *</Label>
                  <Input
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Иван Иванов"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Телефон *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+7 (___) ___-__-__"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="mail@example.com"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="message">Описание заказа</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Опишите, что нужно сделать..."
                    rows={4}
                    className="mt-1"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заявку
                </Button>
              </form>
            </div>

            <div>
              <Card className="mb-6">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start gap-4">
                    <Icon name="MapPin" size={24} className="text-secondary flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-primary mb-1">Адрес</div>
                      <div className="text-muted-foreground">г. Казань, ул. Производственная, 45</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Icon name="Phone" size={24} className="text-secondary flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-primary mb-1">Телефон</div>
                      <div className="text-muted-foreground">+7 (843) 123-45-67</div>
                      <div className="text-muted-foreground">+7 (843) 123-45-68</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Icon name="Mail" size={24} className="text-secondary flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-primary mb-1">Email</div>
                      <div className="text-muted-foreground">info@lazermetal-kazan.ru</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Icon name="Clock" size={24} className="text-secondary flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-primary mb-1">Режим работы</div>
                      <div className="text-muted-foreground">Пн-Пт: 8:00 - 18:00</div>
                      <div className="text-muted-foreground">Сб: 9:00 - 15:00</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="h-64 bg-muted rounded-lg flex items-center justify-center border">
                <div className="text-center text-muted-foreground">
                  <Icon name="Map" size={48} className="mx-auto mb-2 opacity-30" />
                  <div className="text-sm">Карта расположения</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Factory" size={28} />
                <span className="font-bold text-lg">КазаньЛазерМК</span>
              </div>
              <p className="text-white/70 text-sm">
                Профессиональная обработка металла в Казани с 2010 года
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Быстрые ссылки</h3>
              <div className="space-y-2 text-sm">
                <div><a href="#services" className="text-white/70 hover:text-white transition-colors">Услуги</a></div>
                <div><a href="#portfolio" className="text-white/70 hover:text-white transition-colors">Портфолио</a></div>
                <div><a href="#contacts" className="text-white/70 hover:text-white transition-colors">Контакты</a></div>
              </div>
            </div>
            <div>
              <h3 className="font-bold mb-4">Социальные сети</h3>
              <div className="flex gap-3">
                <Button variant="outline" size="icon" className="border-white/30 text-white hover:bg-white/10">
                  <Icon name="Phone" size={18} />
                </Button>
                <Button variant="outline" size="icon" className="border-white/30 text-white hover:bg-white/10">
                  <Icon name="Mail" size={18} />
                </Button>
                <Button variant="outline" size="icon" className="border-white/30 text-white hover:bg-white/10">
                  <Icon name="MessageCircle" size={18} />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-sm text-white/70">
            <p>© 2024 КазаньЛазерМК. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;