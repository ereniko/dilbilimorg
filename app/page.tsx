import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Languages, BookText, TreePine, FileText, BarChart3, ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2 group">
              <span className="text-2xl font-serif font-bold text-foreground group-hover:text-primary transition-colors">
                dilbilim.org.tr
              </span>
            </Link>
            <nav className="hidden md:flex items-center gap-8">
              <Link
                href="/cevirici"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Çevirici
              </Link>
              <Link
                href="/sozdizimi-agaci"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Sözdizimi
              </Link>
              <Link
                href="/terim-sozlugu"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Sözlük
              </Link>
              <Link
                href="/metin-analizi"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Analiz
              </Link>
              <Link
                href="/hakkinda"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Hakkında
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-32 pb-16 sm:pb-24 max-w-7xl">
        <div className="max-w-3xl mx-auto space-y-12">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-foreground tracking-tight leading-[1.1]">
                Türkçe Dilbilim
                <br />
                Araştırma Portalı
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Türkiye Türkçesine özgü fonetik transkripsiyon, sözdizimsel analiz ve terminoloji araçları. Akademik
                çalışmalar ve dilbilim eğitimi için geliştirilmiş dijital platform.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link href="/cevirici">
                <Button size="lg" className="text-base h-12 px-8">
                  Araçları Keşfet
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/hakkinda">
                <Button variant="outline" size="lg" className="text-base h-12 px-8 bg-transparent">
                  Platform Hakkında
                </Button>
              </Link>
            </div>
          </div>

          {/* Feature Cards Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {/* IPA Converter */}
            <Link href="/cevirici" className="group">
              <Card className="p-6 h-full border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Languages className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">IPA Fonetik Çevirici</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Türkçe metinleri IPA formatına çevirin. Geniş ve dar transkripsiyon seçenekleri ile akademik düzeyde
                    çıktı.
                  </p>
                </div>
              </Card>
            </Link>

            {/* Syntax Tree */}
            <Link href="/sozdizimi-agaci" className="group">
              <Card className="p-6 h-full border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-chart-3/10 flex items-center justify-center group-hover:bg-chart-3/20 transition-colors">
                    <TreePine className="h-6 w-6 text-chart-3" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">Sözdizimi Ağaç Çizici</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Parantezli notasyondan otomatik ağaç diyagramı oluşturun. X-Bar teorisi ve karmaşık yapı desteği.
                  </p>
                </div>
              </Card>
            </Link>

            {/* Glossary */}
            <Link href="/terim-sozlugu" className="group">
              <Card className="p-6 h-full border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-chart-2/10 flex items-center justify-center group-hover:bg-chart-2/20 transition-colors">
                    <BookText className="h-6 w-6 text-chart-2" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">Dilbilim Terimleri Sözlüğü</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    42+ terim, Türkçe örnekler ve akademik açıklamalar. Sesbilim, sözdizimi, anlambilim ve daha fazlası.
                  </p>
                </div>
              </Card>
            </Link>

            {/* Text Analysis - NEW ACTIVE FEATURE */}
            <Link href="/metin-analizi" className="group">
              <Card className="p-6 h-full border-border hover:border-chart-4/50 hover:shadow-lg transition-all duration-300">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-chart-4/10 flex items-center justify-center group-hover:bg-chart-4/20 transition-colors">
                    <BarChart3 className="h-6 w-6 text-chart-4" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">Metin Analizi</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Kelime sıklığı, hece sayısı, okunabilirlik skoru ve detaylı metin istatistikleri.
                  </p>
                </div>
              </Card>
            </Link>

            {/* Morphological Analysis - NEW ACTIVE FEATURE */}
            

            {/* Minimal Pairs - NEW ACTIVE FEATURE */}
            <Link href="/minimal-ciftler" className="group">
              <Card className="p-6 h-full border-border hover:border-chart-1/50 hover:shadow-lg transition-all duration-300">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-chart-1/10 flex items-center justify-center group-hover:bg-chart-1/20 transition-colors">
                    <Languages className="h-6 w-6 text-chart-1" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">Minimal Çiftler</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Türkçe minimal çift örnekleri ve fonem karşıtlıkları. Sesbilim çalışmaları için.
                  </p>
                </div>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-y border-border bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-3xl md:text-4xl font-bold text-foreground">5</p>
              <p className="text-sm text-muted-foreground mt-1">Aktif Araç</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-foreground">42+</p>
              <p className="text-sm text-muted-foreground mt-1">Dilbilim Terimi</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-foreground">100%</p>
              <p className="text-sm text-muted-foreground mt-1">Ücretsiz</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-foreground">∞</p>
              <p className="text-sm text-muted-foreground mt-1">Kullanım Limiti</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-foreground mb-4">Araçlar</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/cevirici"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    IPA Çevirici
                  </Link>
                </li>
                <li>
                  <Link
                    href="/sozdizimi-agaci"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Sözdizimi Ağacı
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terim-sozlugu"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Terim Sözlüğü
                  </Link>
                </li>
                <li>
                  <Link
                    href="/metin-analizi"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Metin Analizi
                  </Link>
                </li>
                <li>
                  
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-foreground mb-4">Platform</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/hakkinda"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Hakkında
                  </Link>
                </li>
                <li>
                  <Link
                    href="/iletisim"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    İletişim
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-foreground mb-4">Yasal</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/gizlilik-politikasi"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Gizlilik Politikası
                  </Link>
                </li>
                <li>
                  <Link
                    href="/kullanim-kosullari"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Kullanım Koşulları
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-border">
            <p className="text-xs text-muted-foreground text-center">
              © 2026 dilbilim.org.tr | Gültekin, E. (2026). <em>Dilbilim araştırma portalı</em>. https://dilbilim.org.tr
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
