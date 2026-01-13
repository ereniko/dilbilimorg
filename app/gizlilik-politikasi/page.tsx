"use client"

import { useState } from "react"
import { Moon, Sun, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"

export default function PrivacyPage() {
  const [isDark, setIsDark] = useState(false)

  const toggleDarkMode = () => {
    setIsDark(!isDark)
    document.documentElement.classList.toggle("dark")
  }

  return (
    <div
      className={`min-h-screen bg-gradient-to-br from-background via-background to-muted/20 ${isDark ? "dark" : ""}`}
    >
      <header className="sticky top-0 z-10 border-b border-border/40 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shadow-lg shadow-primary/20">
                <span className="text-lg font-bold text-primary-foreground">ɸ</span>
              </div>
              <div>
                <h1 className="text-lg sm:text-xl font-semibold text-foreground tracking-tight">
                  Türkçe Fonetik Çevirici
                </h1>
                <p className="text-xs text-muted-foreground hidden sm:block">IPA Transkripsiyon Aracı</p>
              </div>
            </Link>

            <Button
              variant="ghost"
              size="icon"
              onClick={toggleDarkMode}
              className="text-muted-foreground hover:text-foreground"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Ana Sayfaya Dön
          </Link>

          <Card className="p-8 border-border/50 shadow-xl shadow-black/5 bg-card/50 backdrop-blur-sm">
            <h1 className="text-3xl font-bold text-foreground mb-4">Gizlilik Politikası</h1>
            <p className="text-sm text-muted-foreground mb-8">
              Son Güncelleme:{" "}
              {new Date().toLocaleDateString("tr-TR", { year: "numeric", month: "long", day: "numeric" })}
            </p>

            <div className="space-y-6 text-foreground/90 leading-relaxed">
              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">1. Genel Bilgiler</h2>
                <p>
                  Türkçe Fonetik Çevirici olarak kullanıcılarımızın gizliliğine saygı duyuyoruz. Bu gizlilik politikası,
                  web sitemizi ziyaret ettiğinizde toplanan bilgileri ve bu bilgilerin nasıl kullanıldığını
                  açıklamaktadır.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">2. Veri Toplama</h2>
                <p className="mb-3">
                  <strong>Girilen Metinler:</strong> Çeviri aracına girdiğiniz tüm Türkçe metinler yalnızca
                  tarayıcınızda (client-side) işlenir. Bu metinler sunucularımıza gönderilmez ve hiçbir şekilde
                  saklanmaz.
                </p>
                <p className="mb-3">
                  <strong>Analitik Veriler:</strong> Web sitemiz, kullanıcı deneyimini iyileştirmek amacıyla anonim
                  kullanım istatistikleri toplayabilir. Bu veriler kişisel kimlik bilgilerinizi içermez.
                </p>
                <p>
                  <strong>Çerezler:</strong> Web sitemiz, tema tercihiniz (karanlık/aydınlık mod) gibi temel işlevsellik
                  için minimal çerez kullanabilir.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">3. Veri Güvenliği</h2>
                <p>
                  Kullanıcı verilerinin güvenliğini ciddiye alıyoruz. Girdiğiniz metinler tarayıcınızdan ayrılmadığı
                  için, verilerinizin kontrolü tamamen sizdedir. Web sitemiz HTTPS protokolü ile şifrelenerek güvenli
                  bağlantı sağlar.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">4. Üçüncü Taraf Hizmetleri</h2>
                <p>
                  Web sitemiz, analitik ve performans izleme için üçüncü taraf hizmetler kullanabilir. Bu hizmetler
                  kendi gizlilik politikalarına tabidir ve kullanıcı verilerini anonim olarak işler.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">5. Kullanıcı Hakları</h2>
                <p>
                  Kullanıcılarımız, herhangi bir kişisel veri toplamamız durumunda bu verilere erişim, düzeltme veya
                  silme talebinde bulunma hakkına sahiptir. Sorularınız için bizimle iletişime geçebilirsiniz.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">6. Çocukların Gizliliği</h2>
                <p>
                  Web sitemiz 13 yaş altı çocuklardan bilerek kişisel bilgi toplamaz. Ebeveyn veya vasiler, çocuklarının
                  internet kullanımını denetlemekle sorumludur.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">7. Politika Değişiklikleri</h2>
                <p>
                  Bu gizlilik politikası zaman zaman güncellenebilir. Önemli değişiklikler durumunda kullanıcılarımız
                  web sitesi üzerinden bilgilendirilecektir.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">8. İletişim</h2>
                <p>
                  Gizlilik politikamız hakkında sorularınız için bizimle iletişime geçebilirsiniz:
                  <a href="mailto:info@turkcefonetik.com" className="text-primary hover:underline ml-1">
                    iletisim@dilbilim.org.tr
                  </a>
                </p>
              </section>
            </div>
          </Card>
        </div>
      </main>
    </div>
  )
}
