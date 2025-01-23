import { Button } from '@mui/material';
import { BrainCircuit, HeartPulse, Utensils, MessageSquareQuote, BadgeCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export default function LandingBuyPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 min-h-screen flex flex-col items-center justify-center">
      {/* Hero Section */}
      <header className="text-center py-16">
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="flex flex-col items-center"
  >
    {/* AI Icon */}
    <div className="w-32 h-32 bg-indigo-100 rounded-full flex items-center justify-center mb-8">
      <BrainCircuit className="text-indigo-600 w-16 h-16" />
    </div>

    {/* Heading Container */}
    <div className="max-w-3xl mx-auto mb-6">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-green-600 bg-clip-text text-transparent">
        Your 24/7 SCD AI Companion
      </h1>
      <p className="text-xl text-gray-600 md:px-20">
        Master the Specific Carbohydrate Diet with personalized AI guidance
      </p>
    </div>

    {/* CTA Button */}
    <div className="mt-8">
      <Button 
        variant="contained" 
        size="large"
        sx={{ 
          fontSize: '1.25rem',
          py: 2,
          px: 4,
          borderRadius: '12px',
          textTransform: 'none',
          width: { xs: '100%', sm: 'auto' } // Responsive width
        }}
      >
        Start Your Free Trial - $49/month after
      </Button>
    </div>
  </motion.div>
</header>

      {/* Value Proposition Grid */}
      <div className="grid md:grid-cols-3 gap-8 py-16">
        <div className="text-center p-6">
          <HeartPulse className="w-12 h-12 text-green-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Symptom-Smart AI</h3>
          <p className="text-gray-600">Get diet recommendations tailored to your current IBD symptoms</p>
        </div>
        
        <div className="text-center p-6">
          <Utensils className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Instant Recipe Conversion</h3>
          <p className="text-gray-600">Transform any meal idea into SCD-compliant recipes</p>
        </div>

        <div className="text-center p-6">
          <MessageSquareQuote className="w-12 h-12 text-purple-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Expert Q&A</h3>
          <p className="text-gray-600">Evidence-based answers to all your SCD questions</p>
        </div>
      </div>

      {/* Pricing CTA */}
      <div className="bg-indigo-50 rounded-2xl p-8 text-center my-16">
        <BadgeCheck className="w-16 h-16 text-green-600 mx-auto mb-6" />
        <h2 className="text-3xl font-bold mb-4">Less Than $1.60/Day For</h2>
        <div className="grid gap-3 mb-8 text-lg text-gray-700">
          <p>✓ Personalized meal planning</p>
          <p>✓ 24/7 symptom-aware support</p>
          <p>✓ Food diary analysis</p>
          <p>✓ Exclusive SCD community access</p>
        </div>
        <Button
          variant="contained"
          size="large"
          color="success"
          sx={{
            fontSize: '1.25rem',
            py: 2,
            px: 6,
            borderRadius: '12px',
            textTransform: 'none',
            fontWeight: 'bold'
          }}
        >
          Get Instant Access Now
        </Button>
        <p className="mt-4 text-sm text-gray-500">7-day money back guarantee</p>
      </div>
    </div>
  )
}