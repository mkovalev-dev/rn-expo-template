## Custom template for Expo React Native

```bash
$ expo init my-app --template @mkovalev-dev/rn-expo-template --npm
```
```
app/
├── assets
├── components/
│   ├── {component_name}Component/
│   │   ├── {component_name}Component.tsx
│   │   ├── {component_name}Types.tsx
│   │   └── {component_name}.Styles.tsx
│   ├── ...
│   ├── ...
│   ├── ...
│   └── index.tsx
├── modules/
│   ├── constants/
│   │   └── rotesConst/
│   │       └── ...
│   ├── theme/
│   │   ├── colorPallete.ts
│   │   ├── dimensionsSize.ts
│   │   ├── fontSize.ts
│   │   ├── fontWeight.ts
│   │   └── ...
│   ├── utils/
│   │   └── ...
│   └── index.tsx
├── services/
│   └── redux/
│       ├── api/
│       │   ├── initialApi.ts
│       │   ├── baseEndpoints.ts
│       │   ├── ...
│       │   ├── ...
│       │   └── ...
│       ├── slices/
│       │   ├── baseSlice.ts
│       │   ├── ...
│       │   ├── ...
│       │   └── ...
│       └── store.ts
├── navigations/
│   ├── OnboardingNavigation.tsx
│   ├── AuthenticationNavigation.tsx
│   ├── BottomTabNavigation.tsx
│   ├── ModalNavigation.tsx
│   └── RootNavigation.tsx
└── pages/
    ├── {page_name}Page/
    │   ├── components/
    │   │   ├── {component_name}Component/
    │   │   │   ├── {component_name}Component.tsx
    │   │   │   ├── {component_name}Types.tsx
    │   │   │   └── {component_name}.Styles.tsx
    │   │   ├── ...
    │   │   ├── ...
    │   │   ├── ...
    │   │   └── index.tsx
    │   └── {page_name}Page.tsx
    ├── ...
    ├── ...
    ├── ...
    └── index.tsx
```
