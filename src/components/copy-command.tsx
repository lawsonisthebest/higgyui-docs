'use client';

import { useState } from 'react';
import { Check, Copy } from 'lucide-react';

export function CopyCommand({ command }: { command: string }) {
  const [status, setStatus] = useState<'idle' | 'copied' | 'failed'>('idle');

  async function copy() {
    try {
      await navigator.clipboard.writeText(command);
      setStatus('copied');
    } catch {
      setStatus('failed');
    }
  }

  return (
    <div className="install-command">
      <span aria-hidden="true">$</span>
      <code>{command}</code>
      <button type="button" onClick={copy} aria-label="Copy install command">
        {status === 'copied' ? <Check size={16} /> : <Copy size={16} />}
      </button>
      <span className="sr-only" role="status">
        {status === 'copied' && 'Copied install command'}
        {status === 'failed' && 'Select and copy the command manually'}
      </span>
    </div>
  );
}
