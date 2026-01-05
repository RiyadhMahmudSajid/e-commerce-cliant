import { ArrowRight, Play, ChevronRight } from 'lucide-react';
import heroImage from '../../../assets/Hero1.png'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-background overflow-hidden transition-colors duration-500">
      
      {/* Background Subtle Patterns - Apple Style */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[10%] left-[5%] w-72 h-72 bg-accent opacity-[0.03] rounded-full blur-[100px]" />
        <div className="absolute bottom-[10%] right-[5%] w-96 h-96 bg-accent opacity-[0.05] rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Content - 7 Columns */}
          <div className="lg:col-span-7 space-y-10">
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-12 bg-accent rounded-full"></span>
              <span className="text-accent font-bold tracking-[0.2em] uppercase text-xs">
                Premium Experience
              </span>
            </div>

            <h1 className="text-6xl md:text-8xl font-black text-text-main tracking-tighter leading-[0.95]">
              Style <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-400">
                Redefined.
              </span>
            </h1>

            <p className="max-w-lg text-lg text-text-muted leading-relaxed font-medium">
              Explore our curated collection of tech and fashion essentials. 
              Designed for those who appreciate the finer details.
            </p>

            <div className="flex flex-wrap gap-5">
              <button className="px-10 py-5 bg-accent hover:bg-accent-hover text-white rounded-full font-bold flex items-center gap-3 transition-all shadow-2xl shadow-accent/30 hover:-translate-y-1 active:scale-95">
                Start Shopping <ArrowRight size={20} />
              </button>
              
              <button className="flex items-center gap-4 px-6 py-5 text-text-main font-bold hover:text-accent transition-colors group">
                <div className="w-12 h-12 flex items-center justify-center rounded-full border border-border-color group-hover:border-accent transition-all">
                  <Play size={18} fill="currentColor" />
                </div>
                See How It Works
              </button>
            </div>
            
            {/* Minimal Brand Proof */}
            <div className="pt-8 flex items-center gap-8 border-t border-border-color/50 max-w-sm">
               <div>
                  <p className="text-2xl font-bold text-text-main">2025</p>
                  <p className="text-xs text-text-muted uppercase tracking-widest font-bold">Edition</p>
               </div>
               <div className="w-px h-8 bg-border-color"></div>
               <div>
                  <p className="text-2xl font-bold text-text-main">Global</p>
                  <p className="text-xs text-text-muted uppercase tracking-widest font-bold">Shipping</p>
               </div>
            </div>
          </div>

          {/* Right Visual Section - 5 Columns */}
          <div className="lg:col-span-5 relative">
            <div className="relative w-full aspect-[4/5] rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.25)] border-[12px] border-bg-secondary transition-all duration-700 hover:rotate-2">
              <img 
                src={heroImage}
                alt="Main Feature" 
                className="w-full h-full object-cover scale-110 hover:scale-100 transition-transform duration-1000"
              />
              
              {/* Floating Overlay Card */}
              <div className="absolute bottom-8 inset-x-8 p-6 bg-bg-primary/80 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl">
                <div className="flex justify-between items-end">
                   <div className="space-y-1">
                      <p className="text-[10px] text-accent font-black uppercase tracking-widest">Featured Product</p>
                      <p className="text-lg font-bold text-text-main">Wireless Precision</p>
                      <p className="text-sm text-text-muted">$299.00</p>
                   </div>
                   <button className="p-3 bg-text-main text-bg-primary rounded-2xl hover:bg-accent transition-colors">
                      <ChevronRight size={20} />
                   </button>
                </div>
              </div>
            </div>

            {/* Background Aesthetic Shape */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent-soft rounded-[2rem] -z-10 rotate-12" />
            <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-border-color rounded-full -z-10 animate-pulse" />
          </div>

        </div>
      </div>
    </section>
  );
}