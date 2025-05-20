import { Download } from "lucide-react"; // Import the Download icon
import React from "react";

// Import any brand assets you have
import logoImage from "../../assets/color_logo.png"; // Update path as needed

export const BrandingKit = function BrandingKit() {
  return (
    <div className="flex flex-col text-justify">
      <h4 className="font-bold mb-4">Branding Kit</h4>

      {/* Logo Section */}
      <section className="mt-8">
        <h5 className="font-bold mb-4">Logo</h5>
        <div className="flex flex-wrap gap-8">
          <div className="flex flex-col items-center group">
            <div className="relative">
              <img src={logoImage} alt="Logo" className="w-40 h-40 object-contain" />
              <a
                href={logoImage}
                download
                className="absolute bottom-2 right-2 p-2 bg-primary text-primary-foreground rounded-full shadow-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                title="Download Logo"
              >
                <Download className="h-5 w-5" />
              </a>
            </div>
            <p className="mt-2 text-sm font-medium">Logo (PNG)</p>
          </div>

          {/* Add more logo variants if needed */}
        </div>
      </section>

      {/* Typography Section */}
      {/* <section className="mt-8">
        <h5 className="font-bold mb-4">Typography</h5>
        <div className="flex flex-col gap-4">
          <div>
            <h6 className="font-medium">Primary Font</h6>
            <p className="text-lg">Font Name</p>
            <div className="mt-2 p-4 bg-secondary rounded-md relative group">
              <p className="text-xl">The quick brown fox jumps over the lazy dog</p>
              <p className="text-sm mt-2">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
              <p className="text-sm">abcdefghijklmnopqrstuvwxyz</p>
              <p className="text-sm">0123456789</p>
              <a
                href="/fonts/primary-font.ttf"
                download
                className="absolute top-2 right-2 p-2 bg-primary text-primary-foreground rounded-full shadow-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                title="Download Font"
              >
                <Download className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section> */}

      {/* Color Palette Section */}
      {/* <section className="mt-8">
        <h5 className="font-bold mb-4">Color Palette</h5>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="flex flex-col">
            <div className="h-20 bg-primary rounded-md" />
            <p className="mt-2 text-sm">Primary</p>
          </div>
          <div className="flex flex-col">
            <div className="h-20 bg-secondary rounded-md" />
            <p className="mt-2 text-sm">Secondary</p>
          </div>
        </div>
      </section> */}

      {/* Background Section */}
      {/* <section className="mt-8">
        <h5 className="font-bold mb-4">Background Assets</h5>
        <div className="flex flex-wrap gap-8">
          <div className="relative group w-64 h-40 bg-accent rounded-md flex items-center justify-center">
            <span className="text-sm text-muted-foreground">Background 1</span>
            <a
              href="/backgrounds/bg1.jpg"
              download
              className="absolute bottom-2 right-2 p-2 bg-primary text-primary-foreground rounded-full shadow-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
              title="Download Background"
            >
              <Download className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section> */}

      <span className="text-sm text-icon-active mt-8">Last updated: 05.20.2025</span>
    </div>
  );
};
