import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Uses',
  description:
    "Stuff I'm currently using",
};

export default function UsesPage() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">
        setup
      </h1>
      <div className="prose prose-neutral dark:prose-invert">
        <h3 id="computer-office">Computer / Office</h3>
        <ul>
          <li>16&quot; Macbook Pro M1 (2021)</li>
        </ul>
        <h3 id="coding">Coding</h3>
        <ul>
          <li>
            Editor: VSCode (
            <a href="REPLACE_WITH_VSCODE_SETTINGS.JSON">
              Settings / Extensions
            </a>
            )
          </li>
          <li>Theme: One Dark Pro Darker </li>
          <li>Terminal: iTerm2 / zsh</li>
        </ul>
        <h3 id="audio-video">Audio / Video</h3>
        <ul>
          <li>Sony A7III (28-50mm, 35mm f1.8)</li>
        </ul>
        <h3 id="software">Software</h3>
        <ul>
          <li>1Password</li>
          <li>Spotify</li>
          <li>Raycast</li>
        </ul>
        <h3 id="other-tech">Other Tech</h3>
        <ul>
          <li>Apple Airpods</li>
          <li>Apple iPhone</li>
        </ul>
      </div>
    </section>
  );
}
