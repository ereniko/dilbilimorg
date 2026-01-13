"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Moon, Sun, Search, ArrowLeft } from "lucide-react"

const glossaryTerms = [
  {
    term: "Fonem",
    definition: "Bir dilde anlam ayırt eden en küçük ses birimi.",
    example:
      "Türkçe'de /k/ ve /g/ birer fonemdir. 'Kal' ve 'Gal' kelimelerindeki anlam farkı bu fonemlerden kaynaklanır.",
    category: "Sesbilim",
  },
  {
    term: "Morfem",
    definition: "Bir dilde anlam taşıyan en küçük birim.",
    example: "'Evler' sözcüğünde 'ev' ve '-ler' iki ayrı morfemdir.",
    category: "Biçimbilim",
  },
  {
    term: "Alomorf",
    definition: "Bir morfemin farklı ses biçimleriyle gerçekleşmesi.",
    example: "Türkçe'de çoğul eki {-lAr}: '-ler' (evler) ve '-lar' (odalar) şeklinde iki alomorfa sahiptir.",
    category: "Biçimbilim",
  },
  {
    term: "Minimal Çift",
    definition: "Sadece tek bir fonem farkıyla birbirinden ayrılan ve farklı anlamlara sahip sözcük çifti.",
    example: "'Kar' ve 'Gar' minimal çifttir çünkü sadece /k/ - /g/ fonem farkı bulunur.",
    category: "Sesbilim",
  },
  {
    term: "Artzamanlılık",
    definition: "Dilin zaman içindeki değişimini ve gelişimini inceleyen yaklaşım.",
    example: "Osmanlıca'dan modern Türkçe'ye geçiş sürecinin incelenmesi artzamanlı bir çalışmadır.",
    category: "Genel Dilbilim",
  },
  {
    term: "Eşzamanlılık",
    definition: "Dilin belirli bir zaman dilimindeki durumunu inceleyen yaklaşım.",
    example: "Günümüz Türkçesi'nin ses sisteminin analizi eşzamanlı bir çalışmadır.",
    category: "Genel Dilbilim",
  },
  {
    term: "Gösteren",
    definition: "Bir göstergenin algılanabilir, fiziksel yönü (ses dizisi veya yazı).",
    example: "'Ağaç' sözcüğünün ses dizilimi /aɑt͡ʃ/ gösterenidir.",
    category: "Göstergebilim",
  },
  {
    term: "Gösterilen",
    definition: "Bir göstergenin zihinsel kavramı veya anlamı.",
    example: "'Ağaç' sözcüğünün zihnimizde oluşturduğu bitki kavramı gösterilendir.",
    category: "Göstergebilim",
  },
  {
    term: "Biçimbirim",
    definition: "Morfem ile eş anlamlı terim. Anlam taşıyan en küçük dil birimi.",
    example: "'Gel-di-m' sözcüğünde üç biçimbirim vardır: gel (kök), -di (zaman), -m (kişi).",
    category: "Biçimbilim",
  },
  {
    term: "Sözdizimi",
    definition: "Sözcüklerin cümle içinde nasıl sıralandığını ve yapılandırıldığını inceleyen dilbilim dalı.",
    example: "Türkçe'de özne-nesne-yüklem sıralaması (SOV) temel sözdizimsel yapıdır: 'Ali kitabı okudu.'",
    category: "Sözdizimi",
  },
  {
    term: "Ses Değişimi",
    definition: "Seslerin belli şartlar altında başka seslere dönüşmesi.",
    example: "Türkçe'de kelime sonunda /b/ sesi /p/'ye dönüşür: 'kitap' → [kitap], ancak 'kitabı' → [kitɑbɯ].",
    category: "Sesbilim",
  },
  {
    term: "Ünlü Uyumu",
    definition: "Türk dillerinde eklerin ünlülerinin kök ünlüsüne uyum göstermesi.",
    example: "Kalın ünlülü kökler kalın ekleri alır: 'oda-lar', ince ünlülü kökler ince ekleri alır: 'ev-ler'.",
    category: "Sesbilim",
  },
  {
    term: "Ünsüz Yumuşaması",
    definition: "Sert ünsüzlerin ünlüler arasında yumuşak ünsüzlere dönüşmesi.",
    example: "'Kitap' sözcüğü ünlü ile başlayan ek aldığında 'kitabı' olur: /p/ → /b/.",
    category: "Sesbilim",
  },
  {
    term: "Türemiş Sözcük",
    definition: "Bir kök sözcükten türetme ekleri alarak oluşmuş sözcük.",
    example: "'Güzellik' sözcüğü 'güzel' kökünden '-lik' eki ile türetilmiştir.",
    category: "Biçimbilim",
  },
  {
    term: "Bağlam",
    definition: "Bir dilsel birimin kullanıldığı çevre, durum ve koşullar.",
    example: "'Banka' sözcüğü para işlemlerinde farklı, nehir kenarında farklı anlam taşır - bağlam belirler.",
    category: "Anlambilim",
  },
  {
    term: "Sesbilim",
    definition: "Konuşma seslerinin fiziksel özelliklerini ve üretimini inceleyen dilbilim dalı.",
    example: "Türkçe'deki /ɯ/ sesinin arka, dar, düz bir ünlü olduğunun belirlenmesi sesbilim çalışmasıdır.",
    category: "Sesbilim",
  },
  {
    term: "Sesbirim",
    definition: "Fonem için kullanılan Türkçe karşılık.",
    example: "Türkçe'de /p/ ve /b/ iki ayrı sesbirimdir.",
    category: "Sesbilim",
  },
  {
    term: "Tonlama",
    definition: "Konuşmada sesin yükseklik ve alçaklığının değişmesi.",
    example: "'Geldin mi?' sorusunda sondaki yükselme tonlama ile sağlanır.",
    category: "Sesbilim",
  },
  {
    term: "Vurgu",
    definition: "Bir hecenin diğerlerinden daha güçlü ve belirgin söylenmesi.",
    example: "Türkçe'de vurgu genellikle son hecededir: 'kitap', 'masalar'.",
    category: "Sesbilim",
  },
  {
    term: "Asimilasyon",
    definition: "Bir sesin komşu seslere benzeme yoluyla değişmesi.",
    example: "'On bir' söyleyişinde /n/ sesi /m/'ye dönüşür: [om bir].",
    category: "Sesbilim",
  },
  {
    term: "Kök",
    definition: "Bir sözcüğün en temel, bölünemeyen anlam birimi.",
    example: "'Evcilik' sözcüğünün kökü 'ev'dir.",
    category: "Biçimbilim",
  },
  {
    term: "Ek",
    definition: "Köklere eklenerek yeni anlamlar veya dilbilgisel işlevler kazandıran birim.",
    example: "'Gel-iyor-lar' sözcüğünde '-iyor' ve '-lar' birer ektir.",
    category: "Biçimbilim",
  },
  {
    term: "Çekim Eki",
    definition: "Sözcüğün anlamını değiştirmeden dilbilgisel özellik katan ek.",
    example: "'Kitap-lar-ı-mız' sözcüğündeki '-lar', '-ı' ve '-mız' çekim ekleridir.",
    category: "Biçimbilim",
  },
  {
    term: "Yapım Eki",
    definition: "Yeni sözcükler türeten veya sözcük türünü değiştiren ek.",
    example: "'Güzel' sıfatından 'güzellik' ismi '-lik' yapım eki ile türetilir.",
    category: "Biçimbilim",
  },
  {
    term: "Sentaks",
    definition: "Sözdizimi için kullanılan terim. Cümle yapısını inceler.",
    example: "Türkçe'nin SOV (Özne-Nesne-Yüklem) sıralaması sentaks konusudur.",
    category: "Sözdizimi",
  },
  {
    term: "Öge",
    definition: "Cümleyi oluşturan temel yapıtaşları.",
    example: "'Ali okula gitti' cümlesinde özne, dolaylı tümleç ve yüklem olmak üzere üç öge vardır.",
    category: "Sözdizimi",
  },
  {
    term: "Yüklem",
    definition: "Cümlede öznenin yaptığı işi veya durumu bildiren öge.",
    example: "'Çocuklar oynuyor' cümlesinde 'oynuyor' yüklemdir.",
    category: "Sözdizimi",
  },
  {
    term: "Özne",
    definition: "Cümlede eylemi yapan veya hakkında bilgi verilen varlık.",
    example: "'Kedi uyuyor' cümlesinde 'kedi' öznedir.",
    category: "Sözdizimi",
  },
  {
    term: "Nesne",
    definition: "Yüklemin etkisini doğrudan alan öge.",
    example: "'Ali elmayı yedi' cümlesinde 'elmayı' nesnedir.",
    category: "Sözdizimi",
  },
  {
    term: "Eş Anlamlılık",
    definition: "Farklı sözcüklerin aynı veya çok benzer anlama sahip olması.",
    example: "'Güzel' ve 'hoş' sözcükleri eş anlamlıdır.",
    category: "Anlambilim",
  },
  {
    term: "Karşıt Anlamlılık",
    definition: "Sözcüklerin birbirine zıt anlamlar taşıması.",
    example: "'Sıcak' ve 'soğuk' sözcükleri karşıt anlamlıdır.",
    category: "Anlambilim",
  },
  {
    term: "Çok Anlamlılık",
    definition: "Bir sözcüğün birden fazla ilişkili anlama sahip olması.",
    example: "'Baş' sözcüğü vücudun bir organı, lider veya başlangıç anlamlarına gelir.",
    category: "Anlambilim",
  },
  {
    term: "Gösterge",
    definition: "Bir kavramı temsil eden ses veya işaret sistemi.",
    example: "'Ağaç' sözcüğü, zihnimizde ağaç kavramını çağrıştıran bir göstergedir.",
    category: "Göstergebilim",
  },
  {
    term: "Göstergebilim",
    definition: "Göstergeleri ve anlamlandırma süreçlerini inceleyen bilim dalı.",
    example: "Trafik işaretlerinin anlamlarının incelenmesi göstergebilim alanına girer.",
    category: "Göstergebilim",
  },
  {
    term: "Dil Edinimi",
    definition: "Çocukların anadillerini öğrenme süreci.",
    example: "2-3 yaş arasında çocukların iki kelimeli cümleler kurması dil ediniminin bir aşamasıdır.",
    category: "Psikodilbilim",
  },
  {
    term: "İki Dillilik",
    definition: "Bir kişinin iki dili ana dil seviyesinde kullanabilmesi.",
    example: "Türkiye'de yaşayan ve hem Türkçe hem Kürtçe konuşan bireyler iki dilli olabilir.",
    category: "Sosyodilbilim",
  },
  {
    term: "Lehçe",
    definition: "Bir dilin farklı coğrafi bölgelerde konuşulan çeşitleri.",
    example: "Anadolu ağızları, Türkçenin farklı lehçeleridir.",
    category: "Sosyodilbilim",
  },
  {
    term: "Dilbilgisi",
    definition: "Bir dilin yapısını ve kurallarını sistematik olarak açıklayan bilgi.",
    example: "Türkçe dilbilgisinde sözcük dizilişi özne-nesne-yüklem şeklindedir.",
    category: "Genel Dilbilim",
  },
  {
    term: "Evrensel Dilbilgisi",
    definition: "Tüm dillerde ortak olan dilbilgisel yapı ve kurallar.",
    example: "Bütün dillerde isim ve fiil kategorisi bulunur - bu evrensel dilbilgisinin bir parçasıdır.",
    category: "Genel Dilbilim",
  },
  {
    term: "Dönüşümlü Dilbilgisi",
    definition: "Chomsky'nin geliştirdiği, cümlelerin derin ve yüzey yapısını inceleyen kuram.",
    example: "'Ali kitabı okudu' etken cümlesi 'Kitap Ali tarafından okundu' edilgen yapısına dönüştürülür.",
    category: "Sözdizimi",
  },
  {
    term: "Pragmatik",
    definition: "Dilin bağlama göre nasıl kullanıldığını inceleyen alan.",
    example: "'Pencereyi açar mısın?' sorusu çoğu bağlamda rica ifade eder, soru değil.",
    category: "Edimbilim",
  },
  {
    term: "Söz Edimi",
    definition: "Konuşma ile gerçekleştirilen eylemler.",
    example: "'Seni evlenmek için davet ediyorum' sözü evlenme teklifi söz edimidir.",
    category: "Edimbilim",
  },
]

export default function GlossaryPage() {
  const [isDark, setIsDark] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")

  const toggleDarkMode = () => {
    setIsDark(!isDark)
    document.documentElement.classList.toggle("dark")
  }

  const filteredTerms = glossaryTerms.filter(
    (item) =>
      item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.definition.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.example.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const categories = Array.from(new Set(glossaryTerms.map((t) => t.category)))

  return (
    <div className={`min-h-screen bg-background ${isDark ? "dark" : ""}`}>
      <header className="border-b border-border bg-background sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2 group">
              <span className="text-xl font-serif font-bold text-foreground group-hover:text-primary transition-colors">
                dilbilim.org.tr
              </span>
              <span className="text-sm text-muted-foreground hidden sm:inline">/ Terim Sözlüğü</span>
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

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-8 lg:py-12">
        <div className="max-w-5xl mx-auto space-y-6 sm:space-y-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Ana Sayfaya Dön
          </Link>

          {/* Intro */}
          <div className="space-y-3 sm:space-y-4">
            <h1 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">Dilbilim Terimleri Sözlüğü</h1>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl">
              Fonetik, morfoloji, sözdizimi ve anlambilim alanlarından temel terimler. Her kavram Türkçe örneklerle
              açıklanmıştır.
            </p>
          </div>

          {/* Search */}
          <Card className="p-4 border-border">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Terim, tanım veya örnek ara..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </Card>

          {/* Categories */}
          <div className="flex flex-wrap gap-2 overflow-x-auto pb-2">
            {categories.map((cat) => (
              <div
                key={cat}
                className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-medium text-primary whitespace-nowrap"
              >
                {cat}
              </div>
            ))}
          </div>

          {/* Terms */}
          <div className="space-y-4">
            {filteredTerms.length > 0 ? (
              filteredTerms.map((item, index) => (
                <Card key={index} className="p-4 sm:p-6 border-border hover:shadow-lg transition-shadow">
                  <div className="space-y-3">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4">
                      <h3 className="text-lg sm:text-xl font-serif font-bold text-foreground">{item.term}</h3>
                      <span className="text-xs font-medium px-2 py-1 rounded-md bg-muted text-muted-foreground whitespace-nowrap self-start">
                        {item.category}
                      </span>
                    </div>

                    <p className="text-sm sm:text-base text-foreground leading-relaxed">{item.definition}</p>

                    <div className="pt-2 border-t border-border/30">
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        <span className="font-semibold text-primary">Örnek:</span> {item.example}
                      </p>
                    </div>
                  </div>
                </Card>
              ))
            ) : (
              <Card className="p-8 sm:p-12 text-center border-border">
                <p className="text-sm sm:text-base text-muted-foreground">Arama kriterinize uygun terim bulunamadı.</p>
              </Card>
            )}
          </div>
        </div>
      </main>

      <footer className="border-t border-border mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-8">
          <div className="text-center space-y-4">
            <p className="text-xs text-muted-foreground">
              {filteredTerms.length} dilbilim terimi | © 2026 dilbilim.org.tr | Gültekin, E. (2026).{" "}
              <em>Dilbilim araştırma portalı</em>. https://dilbilim.org.tr
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
