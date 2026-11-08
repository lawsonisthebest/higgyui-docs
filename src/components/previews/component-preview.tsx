'use client';

import { useState } from 'react';
import {
  Accordion,
  Alert,
  Avatar,
  Badge,
  Breadcrumbs,
  Button,
  Card,
  Checkbox,
  Dialog,
  EmptyState,
  Header,
  IconButton,
  Input,
  Kbd,
  Pagination,
  Progress,
  RadioGroup,
  Select,
  Separator,
  Skeleton,
  Slider,
  Spinner,
  Switch,
  Table,
  Tabs,
  Textarea,
} from 'higgyui';
import { Folder, Layers, Save, Settings } from 'lucide-react';

function PaginationDemo() {
  const [page, setPage] = useState(1);
  return <Pagination page={page} pageCount={5} onPageChange={setPage} />;
}

const examples = {
  'button': () => (
    <Button title="Save changes" icon={Save} hoverAnimation />
  ),
  'icon-button': () => (
    <IconButton label="Open settings" icon={Settings} variant="outline" />
  ),
  'header': () => (
    <Header
      title="Studio"
      logo={Layers}
      sticky={false}
      items={[
        { title: "Overview", active: true },
        { title: "Projects" },
      ]}
    />
  ),
  'breadcrumbs': () => (
    <Breadcrumbs items={[
      { title: "Workspace", href: "/docs" },
      { title: "Components", href: "/docs/components" },
      { title: "Breadcrumbs" },
    ]} />
  ),
  'tabs': () => (
    <Tabs label="Project settings" items={[
      { id: "general", title: "General", content: "Manage your project details." },
      { id: "members", title: "Members", content: "See who can access the project." },
    ]} />
  ),
  'accordion': () => (
    <Accordion
      defaultOpen="access"
      items={[
        { id: "access", title: "Who has access?", content: "Members of this workspace." },
        { id: "invite", title: "How do I invite someone?", content: "Ask a workspace owner." },
      ]}
    />
  ),
  'pagination': () => (
    <PaginationDemo />
  ),
  'dialog': () => (
    <Dialog
      triggerLabel="View details"
      title="Project information"
      description="A quick look at this project."
    >
      This project is visible to your team.
    </Dialog>
  ),
  'input': () => (
    <Input label="Project name" name="project" placeholder="Studio redesign" description="Shown in your workspace." />
  ),
  'textarea': () => (
    <Textarea label="Project notes" name="notes" placeholder="Add a note" rows={4} />
  ),
  'select': () => (
    <Select label="Visibility" name="visibility" defaultValue="team" options={[
      { value: "private", label: "Private" },
      { value: "team", label: "Team" },
      { value: "public", label: "Public" },
    ]} />
  ),
  'checkbox': () => (
    <Checkbox label="Email notifications" name="notifications" description="Send an email when someone mentions you." defaultChecked />
  ),
  'switch': () => (
    <Switch label="Weekly summary" name="summary" description="Receive a recap of workspace activity." defaultChecked />
  ),
  'radio-group': () => (
    <RadioGroup label="Email frequency" name="frequency" defaultValue="weekly" options={[
      { value: "daily", label: "Daily" },
      { value: "weekly", label: "Weekly" },
      { value: "never", label: "Never" },
    ]} />
  ),
  'slider': () => (
    <Slider label="Volume" name="volume" min={0} max={100} step={5} defaultValue={60} />
  ),
  'card': () => (
    <Card title="Project settings" description="Manage your workspace." footer={<Badge variant="muted">Draft</Badge>}>
      Changes apply to everyone on your team.
    </Card>
  ),
  'badge': () => (
    <Badge variant="muted">In review</Badge>
  ),
  'avatar': () => (
    <Avatar name="Jordan Lee" size="md" />
  ),
  'table': () => (
    <Table caption="Workspace projects"
      columns={[{ id: "name", title: "Project" }, { id: "status", title: "Status", align: "right" }]}
      rows={[
        { id: "ui", cells: { name: "HiggyUI", status: "In progress" } },
        { id: "docs", cells: { name: "Documentation", status: "In review" } },
      ]}
    />
  ),
  'separator': () => (
    <div className="grid gap-3">
      <span>Project details</span>
      <Separator />
      <span>Workspace settings</span>
    </div>
  ),
  'kbd': () => (
    <span className="flex items-center gap-1">
      <Kbd>Ctrl</Kbd><span aria-hidden="true">+</span><Kbd>K</Kbd>
    </span>
  ),
  'alert': () => (
    <Alert title="Workspace updated" variant="info">
      Your settings were saved.
    </Alert>
  ),
  'empty-state': () => (
    <EmptyState title="No projects yet" icon={Folder}
      description="Projects you create will show up here."
    />
  ),
  'progress': () => (
    <Progress label="Upload progress" value={65} max={100} />
  ),
  'skeleton': () => (
    <div className="grid gap-2">
      <Skeleton className="max-w-48" />
      <Skeleton className="max-w-32" />
    </div>
  ),
  'spinner': () => (
    <Spinner label="Loading projects" size={24} />
  ),
};

export function ComponentPreview({ name }: { name: keyof typeof examples }) {
  const Example = examples[name];

  return (
    <div className="component-preview not-prose">
      <div className="component-preview-label"><span /> LIVE PREVIEW</div>
      <div className={`component-preview-stage ${name === 'header' ? 'component-preview-wide' : ''}`}>
        <div className="component-preview-content"><Example /></div>
      </div>
    </div>
  );
}
