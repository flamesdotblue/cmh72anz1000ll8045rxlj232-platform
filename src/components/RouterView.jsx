import React, { useEffect, useState } from 'react';
import MainSections from './MainSections';
import SubpageCompare from './SubpageCompare';
import SubpageDeepDive from './SubpageDeepDive';

export default function RouterView() {
  const [route, setRoute] = useState(typeof window !== 'undefined' ? window.location.hash.replace('#', '') : '');

  useEffect(() => {
    const onHash = () => setRoute(window.location.hash.replace('#', ''));
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  if (route === 'compare') return <SubpageCompare />;
  if (route === 'deep-dive') return <SubpageDeepDive />;

  return <MainSections />;
}
