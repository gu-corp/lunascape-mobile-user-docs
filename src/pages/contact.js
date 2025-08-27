import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useIsBrowser from '@docusaurus/useIsBrowser';
import {translate} from '@docusaurus/Translate';
import HubSpotContactForm from '@site/src/components/HubSpotContactForm';

function Contact() {
  const {siteConfig} = useDocusaurusContext();
  const isBrowser = useIsBrowser();
  
  return (
    <Layout
      title={translate({
        id: 'contact.title',
        message: 'Contact',
      })}
      description={translate({
        id: 'contact.description',
        message: 'Lunascape for Mobile contact form',
      })}
    >
      <main style={{ 
        maxWidth: '600px', 
        margin: '0 auto', 
        padding: '2rem 1rem',
        width: '100%'
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {/* ヘッダーセクション */}
          <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h1 style={{ 
              fontSize: '2.25rem', 
              fontWeight: 'bold', 
              letterSpacing: '-0.025em',
              color: 'hsl(var(--foreground))'
            }}>
              {translate({
                id: 'contact.heading',
                message: 'Contact Us',
              })}
            </h1>
            <p style={{ 
              fontSize: '1.125rem',
              color: 'hsl(var(--muted-foreground))',
              maxWidth: '32rem',
              margin: '0 auto'
            }}>
              {translate({
                id: 'contact.subtitle',
                message: "We're here to help! Please use the contact form below to get in touch with our support team.",
              })}
            </p>
          </div>

          {/* カードコンテナ */}
          <div style={{
            backgroundColor: 'hsl(var(--background))',
            border: '1px solid hsl(var(--border))',
            borderRadius: '0.5rem',
            boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
            padding: '1.5rem'
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <h2 style={{ 
                  fontSize: '1.5rem', 
                  fontWeight: '600',
                  color: 'hsl(var(--foreground))'
                }}>
                  {translate({
                    id: 'contact.support.title',
                    message: 'Lunascape for Mobile Support',
                  })}
                </h2>
                <p style={{ color: 'hsl(var(--muted-foreground))' }}>
                  {translate({
                    id: 'contact.support.description',
                    message: 'If you have questions or need assistance with Lunascape for Mobile, please fill out the form below:',
                  })}
                </p>
              </div>
              
              <div style={{ 
                borderTop: '1px solid hsl(var(--border))', 
                paddingTop: '1.5rem' 
              }}>
                <HubSpotContactForm />
              </div>
            </div>
          </div>

          {/* 追加情報セクション */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>


            <div style={{
              backgroundColor: 'hsl(var(--background))',
              border: '1px solid hsl(var(--border))',
              borderRadius: '0.5rem',
              padding: '1.5rem'
            }}>
              <h3 style={{ 
                fontSize: '1.125rem', 
                fontWeight: '600', 
                marginBottom: '1rem',
                color: 'hsl(var(--foreground))'
              }}>
                {translate({
                  id: 'contact.before.title',
                  message: 'Before Contacting Support',
                })}
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.875rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                  <span style={{ color: 'hsl(var(--primary))', fontWeight: '500', flexShrink: 0 }}>1.</span>
                  <span style={{ color: 'hsl(var(--muted-foreground))' }}>
                    {translate({
                      id: 'contact.before.item1',
                      message: 'Check our documentation - Your question might already be answered in our guides',
                    })}
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                  <span style={{ color: 'hsl(var(--primary))', fontWeight: '500', flexShrink: 0 }}>2.</span>
                  <span style={{ color: 'hsl(var(--muted-foreground))' }}>
                    {translate({
                      id: 'contact.before.item2',
                      message: 'Include relevant details - Version numbers, error messages, and steps to reproduce',
                    })}
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                  <span style={{ color: 'hsl(var(--primary))', fontWeight: '500', flexShrink: 0 }}>3.</span>
                  <span style={{ color: 'hsl(var(--muted-foreground))' }}>
                    {translate({
                      id: 'contact.before.item3',
                      message: 'Attach screenshots - If applicable, include screenshots of any error messages',
                    })}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* 注意書き */}
          <div style={{
            backgroundColor: 'hsl(var(--muted) / 0.5)',
            border: '1px solid hsl(var(--border))',
            borderRadius: '0.5rem',
            padding: '1rem'
          }}>
            <p style={{ 
              fontSize: '0.875rem',
              color: 'hsl(var(--muted-foreground))',
              textAlign: 'center',
              margin: 0
            }}>
              <strong>{translate({
                id: 'contact.note.label',
                message: 'Note:',
              })}</strong> {translate({
                id: 'contact.note',
                message: 'This contact form is for Lunascape for Mobile support. For other Lunascape products, please visit our main support page.',
              })}
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default Contact;
