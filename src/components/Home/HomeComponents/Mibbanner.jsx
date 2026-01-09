import { Sparkles, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function Mibbanner() {
  return (
    <section className="py-12 bg-surface transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div className="relative overflow-hidden rounded-2xl bg-bg-secondary border border-border-color/50 shadow-sm flex flex-col lg:flex-row items-stretch">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex-1 p-8 lg:p-12 flex flex-col justify-center space-y-6 relative z-10"
          >
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-accent">
                <Sparkles size={14} />
                <span className="text-xs font-black uppercase tracking-[0.2em]">Limited Access</span>
              </div>

              <h2 className="text-3xl lg:text-5xl font-bold text-text-main tracking-tight leading-tight">
                Summer Sale <span className="text-accent">Live.</span>
              </h2>

              <p className="max-w-md text-sm lg:text-base text-text-muted font-medium opacity-90 leading-relaxed">
                Experience premium performance with our seasonal collection. Up to 50% off for a limited time.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-text-main text-bg-primary hover:bg-accent hover:text-white rounded-xl font-bold transition-all flex items-center gap-2 text-sm"
              >
                Shop Now <ArrowRight size={16} />
              </motion.button>

              <div className="flex items-center gap-6 border-l border-border-color pl-6">
                <div className="leading-none">
                  <p className="text-xl font-black text-text-main">50%</p>
                  <p className="text-[9px] uppercase tracking-tighter text-text-muted font-bold">Discount</p>
                </div>
                <div className="leading-none">
                  <p className="text-xl font-black text-text-main">07</p>
                  <p className="text-[9px] uppercase tracking-tighter text-text-muted font-bold">Days Left</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:w-2/5 relative min-h-[250px] lg:min-h-full overflow-hidden"
          >
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.8 }}
              src="https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Summer Sale"
              className="absolute inset-0 w-full h-full object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-bg-secondary via-transparent to-transparent hidden lg:block" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
