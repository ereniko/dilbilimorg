"use client"

import { useState } from "react"
import { Moon, Sun, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"

export default function TermsPage() {
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
            <h1 className="text-3xl font-bold text-foreground mb-4">Kullanım Koşulları</h1>
            <p className="text-sm text-muted-foreground mb-8">
              Son Güncelleme:{" "}
              {new Date().toLocaleDateString("tr-TR", { year: "numeric", month: "long", day: "numeric" })}
            </p>

            <div className="space-y-6 text-foreground/90 leading-relaxed">
              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">1. Hizmetin Kabulü</h2>
                <p>
                  Türkçe Fonetik Çevirici web sitesini kullanarak, bu kullanım koşullarını kabul etmiş sayılırsınız. Bu
                  koşulları kabul etmiyorsanız, lütfen web sitemizi kullanmayınız.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">2. Hizmet Açıklaması</h2>
                <p>
                  Türkçe Fonetik Çevirici, Türkçe metinleri IPA (International Phonetic Alphabet) transkipsiyonuna
                  dönüştüren ücretsiz bir web aracıdır. Hizmet "olduğu gibi" sunulmaktadır ve herhangi bir garanti
                  içermemektedir.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">3. Kullanım Şartları</h2>
                <p className="mb-3">Kullanıcılar web sitemizi kullanırken:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Yasalara ve düzenlemelere uygun şekilde kullanmalıdır</li>
                  <li>Sisteme zarar verebilecek içerik girmemelidir</li>
                  <li>Hizmeti kötüye kullanmamalı veya otomatik araçlarla aşırı yük oluşturmamalıdır</li>
                  <li>Diğer kullanıcıların hizmet deneyimini olumsuz etkilememelidir</li>
                  <li>Telif hakkı korumalı içeriği uygun izin olmadan kullanmamalıdır</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">4. Fikri Mülkiyet</h2>
                <p>
                  Web sitesinin tasarımı, içeriği ve yazılımı telif hakkı ile korunmaktadır. İclal Ergenç'in akademik
                  çalışması referans alınmıştır ve ilgili akademik atıflar yapılmaktadır. Kullanıcılar, transkripsiyon
                  sonuçlarını kişisel veya akademik amaçlarla kullanabilirler.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">5. Sorumluluk Reddi</h2>
                <p className="mb-3">
                  Türkçe Fonetik Çevirici, akademik standartlara uygun olarak geliştirilmiş olsa da, transkripsiyon
                  sonuçlarının %100 doğruluğunu garanti etmez. Kullanıcılar:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Kritik akademik çalışmalarda sonuçları doğrulamalıdır</li>
                  <li>Hizmetin ara ara kesintiye uğrayabileceğini kabul eder</li>
                  <li>Herhangi bir veri kaybından sorumlu olmadığımızı anlar</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">6. Hizmet Değişiklikleri</h2>
                <p>
                  Önceden haber vermeksizin hizmeti değiştirme, askıya alma veya sonlandırma hakkını saklı tutarız.
                  Önemli değişiklikler durumunda kullanıcılar mümkün olduğunca bilgilendirilecektir.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">7. Bağlantılar</h2>
                <p>
                  Web sitemiz üçüncü taraf web sitelerine bağlantılar içerebilir. Bu sitelerin içeriğinden sorumlu
                  değiliz ve bu bağlantıları kullanmanız kendi sorumluluğunuzdadır.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">8. Akademik Kullanım</h2>
                <p>
                  Bu aracı akademik çalışmalarda kullanırken, lütfen uygun akademik atıfları yapınız. Önerilen atıf: Gültekin, E. (2026). Türkçe Fonetik Çevirici. Dilbilim.org.tr. Erişim adresi: https://dilbilim.org.tr
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">9. Uygulanacak Hukuk</h2>
                <p>
                  Bu kullanım koşulları Türkiye Cumhuriyeti yasalarına tabidir. Herhangi bir anlaşmazlık durumunda Türkiye Cumhuriyeti mahkemeleri yetkilidir.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">10. İletişim</h2>
                <p>
                  Kullanım koşulları hakkında sorularınız için bizimle iletişime geçebilirsiniz:
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
