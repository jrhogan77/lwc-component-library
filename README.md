# LWC Component Library
### Production-Ready Lightning Web Components for Salesforce

A curated library of Lightning Web Components built for real enterprise deployments — Experience Cloud portals, Sales Cloud record pages, Service Cloud console apps, and custom Flow screens. Every component is built to Salesforce platform standards with configurability, accessibility, and performance as non-negotiables.

---

## Component Standards

- `apiVersion: 66.0` on all components
- Boolean `@api` props from Flow always handled via `_toBool()` getter — string coercion accounted for
- No inline styles — CSS custom properties and SLDS tokens only
- All components `isExposed: true` with full property metadata for App Builder and Flow configuration
- CPE (Configuration Property Editor) provided for any component with complex property sets

---

## Component Categories

### Data Display
Components that surface Salesforce data with full control over layout, density, and user interaction.

```
lwc/
├── smartDataTable/         — Configurable, sortable, filterable data table with inline edit
├── recordDetailCard/       — Compact record summary card for Experience Cloud and record pages
└── relatedListEnhanced/    — Related list with column config, search, and action support
```

### Form & Input
Input components built for Flow screens and custom record forms.

```
lwc/
├── smartAddressBlock/      — Address input with validation and auto-format
├── smartAddressBlockCPE/   — Configuration Property Editor for smartAddressBlock
├── conditionalFieldGroup/  — Shows/hides field groups based on field values
└── lookupWithFilter/       — Custom lookup with SOQL filter support
```

### Navigation & Layout
Structural components for Experience Cloud and App Builder pages.

```
lwc/
├── tabContainerDynamic/    — Tab layout driven by metadata, no hardcoding
├── progressStepBar/        — Visual stage/status indicator for process flows
└── modalWrapper/           — Accessible modal shell with slot-based content
```

### Flow Screen Components
Purpose-built for Salesforce Flow — fully compatible with Flow's screen component API.

```
lwc/
├── flowConfirmationStep/   — Confirmation/review screen before DML commit
├── flowProgressIndicator/  — Visual progress bar tied to Flow variable
└── flowDocumentUpload/     — File upload component wired to Flow variables
```

---

## Architecture Notes

**Boolean handling from Flow:**
Flow passes `@api` Boolean properties as strings (`"true"` / `"false"`). All boolean props in this library use a private backing field with a getter to coerce correctly:

```javascript
get isActive() { return this._isActive; }
set isActive(val) { this._isActive = (val === true || val === 'true'); }
```

**No `configurationEditor` without a CPE deployed.** If a CPE companion component doesn't exist in the target org, the meta.xml will not reference one.

---

## About

Built by **Jason Hogan** — Salesforce Solutions Architect & AI Engineer based in St. George, Utah.

- LinkedIn: [jason-hogan1](https://www.linkedin.com/in/jason-hogan1/)
- GitHub: [@jrhogan77](https://github.com/jrhogan77)
- Email: jrhogan.tbd@gmail.com
