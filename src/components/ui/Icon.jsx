import React from 'react';
import { 
  Smartphone, 
  Download, 
  Shield, 
  Wallet, 
  Rss, 
  Zap, 
  Lock, 
  Globe, 
  Settings, 
  Newspaper, 
  Home, 
  Search, 
  Bookmark, 
  History, 
  Share2, 
  Eye, 
  Menu, 
  Cog, 
  CreditCard, 
  ChevronRight,
  CheckCircle,
  Star,
  Users,
  Target,
  Lightbulb,
  ShieldCheck,
  Wifi,
  Palette,
  Database,
  HelpCircle,
  RotateCcw,
  Plus,
  BarChart3,
  Coins,
  Link,
  Activity
} from 'lucide-react';

const iconMap = {
  // Device icons
  'smartphone': Smartphone,
  'download': Download,
  'shield': Shield,
  'wallet': Wallet,
  'rss': Rss,
  'zap': Zap,
  'lock': Lock,
  'globe': Globe,
  'settings': Settings,
  'newspaper': Newspaper,
  'home': Home,
  'search': Search,
  'bookmark': Bookmark,
  'history': History,
  'share': Share2,
  'eye': Eye,
  'menu': Menu,
  'cog': Cog,
  'credit-card': CreditCard,
  'chevron-right': ChevronRight,
  'check-circle': CheckCircle,
  'star': Star,
  'users': Users,
  'target': Target,
  'lightbulb': Lightbulb,
  'shield-check': ShieldCheck,
  'wifi': Wifi,
  'palette': Palette,
  'database': Database,
  'help-circle': HelpCircle,
  'rotate-ccw': RotateCcw,
  'plus': Plus,
  'bar-chart': BarChart3,
  'coins': Coins,
  'link': Link,
  'activity': Activity,
};

const Icon = ({ 
  name, 
  size = 24, 
  className = '', 
  style = {},
  variant = 'default' // 'default', 'primary', 'secondary'
}) => {
  const IconComponent = iconMap[name];
  
  if (!IconComponent) {
    console.warn(`Icon "${name}" not found`);
    return null;
  }

  const getIconStyles = () => {
    const baseStyles = {
      width: size,
      height: size,
      ...style
    };

    switch (variant) {
      case 'primary':
        return {
          ...baseStyles,
          background: 'linear-gradient(135deg, #0093ff 0%, var(--ifm-color-primary) 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          filter: 'drop-shadow(0 0 2px rgba(0, 147, 255, 0.2))',
          display: 'inline-block'
        };
      case 'secondary':
        return {
          ...baseStyles,
          color: '#000000',
          filter: 'drop-shadow(0 0 1px rgba(0, 0, 0, 0.2))'
        };
      case 'gradient':
        return {
          ...baseStyles,
          background: 'linear-gradient(135deg, #0093ff 0%, var(--ifm-color-primary) 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          filter: 'drop-shadow(0 0 3px rgba(0, 147, 255, 0.3))',
          display: 'inline-block'
        };
      case 'outline':
        return {
          ...baseStyles,
          color: 'var(--ifm-color-primary)',
          strokeWidth: 2,
          filter: 'drop-shadow(0 0 1px rgba(0, 147, 255, 0.3))'
        };
      case 'gradient-border':
        return {
          ...baseStyles,
          color: 'var(--ifm-color-primary)',
          display: 'inline-block'
        };
      default:
        return {
          ...baseStyles,
          color: 'var(--ifm-color-primary)',
          filter: 'drop-shadow(0 0 1px rgba(0, 147, 255, 0.2))'
        };
    }
  };

  return (
    <IconComponent 
      className={className}
      style={getIconStyles()}
    />
  );
};

export default Icon;
