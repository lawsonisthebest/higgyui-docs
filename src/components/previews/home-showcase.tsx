'use client';

import { Avatar, Badge, Card, Progress, Switch, Tabs } from 'higgyui';
import { Check, Layers3 } from 'lucide-react';

export function HomeShowcase() {
  return (
    <div className="showcase-window" aria-label="Interactive example workspace">
      <div className="showcase-chrome">
        <span><Layers3 size={15} /> Studio workspace</span>
        <span className="showcase-live"><i /> Live preview</span>
      </div>
      <div className="showcase-body">
        <div className="showcase-heading">
          <div>
            <p>Workspace / Projects</p>
            <h2>Project overview</h2>
          </div>
          <Avatar name="Jamie Reed" size="sm" />
        </div>
        <Tabs label="Workspace sections" items={[
          {
            id: 'overview',
            title: 'Overview',
            content: (
              <Card title="Release checklist" description="Sprint 04 · Component library">
                <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                  <span className="font-medium">Release progress</span>
                  <Badge variant="muted">3 of 4 complete</Badge>
                </div>
                <Progress label="Release progress" value={3} max={4} />
                <div className="mt-4 flex items-center gap-2 text-neutral-600">
                  <Check size={15} /> Component review complete
                </div>
              </Card>
            ),
          },
          {
            id: 'settings',
            title: 'Settings',
            content: (
              <Card title="Notifications" description="Preferences for this workspace">
                <Switch label="Weekly summary" description="Send a recap of project activity." defaultChecked />
              </Card>
            ),
          },
        ]} />
      </div>
    </div>
  );
}
