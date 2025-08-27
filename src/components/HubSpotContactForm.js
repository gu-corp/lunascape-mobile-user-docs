import React, { useEffect, useRef, useState } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

function HubSpotContactForm() {
  const { i18n } = useDocusaurusContext();
  const formRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // 言語に応じたフォームID（正しいIDに更新）
  const formIds = {
    en: '89e9dff1-cf36-4b91-99b0-eeb0168da1cc',
    ja: 'd5e1e5f5-9966-4ed7-9d5e-6e797ad45b1f'
  };

  const currentFormId = formIds[i18n.currentLocale] || formIds.en;
  const targetId = 'hubspot-form-container';

  useEffect(() => {
    // 既存のHubSpotフォームをクリア
    if (formRef.current) {
      formRef.current.innerHTML = '';
    }

    // HubSpotスクリプトが既に読み込まれているかチェック
    if (window.hbspt) {
      createForm();
      return;
    }

    // スクリプトを動的に読み込み
    const script = document.createElement('script');
    script.src = '//js.hsforms.net/forms/embed/v2.js';
    script.async = true;
    script.onload = () => {
      setIsLoaded(true);
      createForm();
    };
    document.head.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [currentFormId]);

  const createForm = () => {
    if (window.hbspt && formRef.current) {
      // 既存のフォームをクリア
      formRef.current.innerHTML = '';
      
      // フォーム作成前に少し遅延を入れる
      setTimeout(() => {
        window.hbspt.forms.create({
          region: 'na1',
          portalId: '21059217',
          formId: currentFormId,
          target: `#${targetId}`,
          onFormReady: (form) => {
            console.log('HubSpot form loaded successfully');
            setIsLoaded(true);
          },
          onFormSubmit: (form) => {
            console.log('Form submitted');
          }
        });
      }, 100);
    }
  };

  return (
    <div className="hubspot-form-container" id={targetId}>
      <div ref={formRef} />
      {!isLoaded && (
        <div style={{ textAlign: 'center', padding: '2rem' }}>
          <p>Loading contact form...</p>
        </div>
      )}
    </div>
  );
}

export default HubSpotContactForm;
