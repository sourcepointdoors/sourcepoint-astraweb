// Stable product IDs are independent of display names. Empty document lists retain the draft placeholders.
export const masterWarranty = {
  title: 'SourcePoint Master Warranty Terms',
  url: '/assets/documents/warranties/sourcepoint-master-warranty-sp-war-001-sept-2026.pdf',
  metadata: 'SP-WAR-001 · Version 1.3 · Revised September 2026',
};

export const warrantyGroups = {
  forge: [
    {
      id: 'forge-exterior-wrought-iron-doors',
      name: 'Forge Exterior Wrought Iron Doors',
      documents: [
        {
          url: '/assets/documents/warranties/forge-exterior-warranty-sp-war-004-sept-2026.pdf',
          label: 'View Warranty PDF',
        },
        {
          url: '/assets/documents/warranties/forge-exterior-care-guide-sp-war-005-sept-2026.pdf',
          label: 'View Care & Maintenance Guide PDF',
        },
      ],
      notes: ['SP-WAR-004 / SP-WAR-005 · Rev. September 2026'],
    },
    {
      id: 'forge-interior-iron-doors',
      name: 'Forge Interior Iron Doors',
      documents: [],
      notes: [],
    },
  ],
  chateau: [
    {
      id: 'chateau-exterior-steel-french-doors',
      name: 'Chateau Exterior Steel French Doors',
      documents: [],
      notes: [],
    },
    {
      id: 'chateau-interior-steel-french-doors',
      name: 'Chateau Interior Steel French Doors',
      documents: [],
      notes: [],
    },
  ],
  element: [
    {
      id: 'element-folding-doors',
      name: 'Element Folding Doors',
      documents: [
        {
          url: '/assets/documents/warranties/element-folding-warranty-sp-war-002-sept-2026.pdf',
          label: 'View Warranty PDF',
        },
        {
          url: '/assets/documents/warranties/element-folding-care-guide-sp-war-003-sept-2026.pdf',
          label: 'View Care & Maintenance Guide PDF',
        },
      ],
      notes: ['Inland, non-HVHZ · Version 1.2', 'SP-WAR-002 / SP-WAR-003 · Rev. September 2026'],
    },
    {
      id: 'element-casement-swing-doors',
      name: 'Element Casement (Swing) Doors',
      documents: [],
      notes: [],
    },
    {
      id: 'element-aluminum-windows',
      name: 'Element Aluminum Windows',
      documents: [],
      notes: [],
    },
    {
      id: 'element-aluminum-interior-doors',
      name: 'Element Aluminum Interior Doors',
      documents: [],
      notes: [],
    },
  ],
  heritage: [
    {
      id: 'heritage-torrefied-mahogany-doors',
      name: 'Heritage Torrefied Mahogany Doors',
      documents: [
        {
          url: '/assets/documents/warranties/heritage-torrefied-warranty-sp-war-008-sept-2026.pdf',
          label: 'View Warranty PDF',
        },
        {
          url: '/assets/documents/warranties/heritage-torrefied-care-guide-sp-war-009-sept-2026.pdf',
          label: 'View care & finishing guide PDF',
        },
      ],
      notes: ['SP-WAR-008 / SP-WAR-009 · Rev. September 2026'],
    },
    {
      id: 'heritage-wood-doors',
      name: 'Heritage Wood Doors',
      documents: [],
      notes: [],
    },
  ],
  valera: [
    {
      id: 'valera-exterior-fiberglass-doors',
      name: 'Valera Exterior Fiberglass Doors',
      documents: [
        {
          url: '/assets/documents/warranties/valera-fiberglass-warranty-sp-war-010-sept-2026.pdf',
          label: 'View Warranty PDF',
        },
        {
          url: '/assets/documents/warranties/valera-fiberglass-care-guide-sp-war-011-sept-2026.pdf',
          label: 'View care & finishing guide PDF',
        },
      ],
      notes: ['SP-WAR-010 / SP-WAR-011 · Rev. September 2026'],
    },
  ],
};
