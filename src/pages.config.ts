/**
 * Page Metadata Configuration
 * 
 * Centralized SEO metadata for all static pages. Single source of truth
 * for titles and descriptions to ensure consistency across the site.
 * 
 * Usage:
 * ```astro
 * ---
 * import BaseLayout from '../layouts/BaseLayout.astro';
 * import SEO from '../components/SEO.astro';
 * import { pagesConfig } from '../pages.config';
 * ---
 * 
 * <BaseLayout>
 *   <SEO 
 *     slot="head"
 *     title={pagesConfig.projects.title}
 *     description={pagesConfig.projects.description}
 *   />
 *   <!-- Page content -->
 * </BaseLayout>
 * ```
 * 
 * @module pages.config
 */

/**
 * Page metadata interface
 */
interface PageMeta {
  /** Page title (used in browser tab and SEO) */
  title: string;
  
  /** Page description (used in meta tags and SEO) */
  description: string;
  
  /** Page heading (displayed as h1, optional - defaults to title) */
  heading?: string;
  
  /** Page intro text (displayed below heading, optional) */
  intro?: string;
}

/**
 * Pages configuration object
 * 
 * Contains metadata for all static pages. Dynamic pages (like individual
 * project or article pages) generate their own metadata from content.
 */
export const pagesConfig = {
  /**
   * Home page (/)
   * Note: Home page uses siteConfig for title/description as it represents the site itself
   */
  home: {
    title: 'Home',
    description: 'Engineering leader focused on turning complex technical problems into maintainable solutions and high-efficiency workflows.',
  },
  
  /**
   * Projects listing page (/projects)
   */
  projects: {
    title: 'Projects - Case Studies',
    description: 'Lead Frontend Engineer case studies focusing on solving enterprise-scale bottlenecks, building internal tooling, and streamlining high-traffic workflows.',
    heading: 'Projects',
    intro: 'A look into some of the specific problems I’ve solved and the tools I’ve built to help engineering teams move faster. These case studies focus on the practical trade-offs and technical decisions required to turn complex legacy issues into maintainable, high-impact solutions.',
  },
  

  /**
   * About page (/about)
   */
  about: {
    title: 'About - About Me',
    description: 'A little bit about me.',
    heading: 'About',
    intro: 'Solving enterprise-scale problems by building reliable tools and workflows that help engineering teams move faster.',
  },
  
  /**
   * Contact page (/contact)
   */
  contact: {
    title: 'Contact - Get in Touch',
    description: 'Get in touch to discuss opportunities, collaborations, or technical challenges.',
    heading: 'Reach out to me directly:',
  },
} as const;

/**
 * Type export for the pages configuration
 */
export type PagesConfig = typeof pagesConfig;

/**
 * Type export for a single page metadata
 */
export type PageConfig = PageMeta;
