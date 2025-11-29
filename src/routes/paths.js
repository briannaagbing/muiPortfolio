import { paramCase } from 'src/utils/change-case';

import { _id, _postTitles } from 'src/_mock/assets';

// ----------------------------------------------------------------------

const MOCK_ID = _id[1];

const MOCK_TITLE = _postTitles[2];

const ROOTS = {
  AUTH: '/auth',
  AUTH_DEMO: '/auth-demo',
  DASHBOARD: '/dashboard',
};

// ----------------------------------------------------------------------

export const paths = {
  comingSoon: '/coming-soon',
  maintenance: '/maintenance',
  pricing: '/pricing',
  payment: '/payment',
  about: '/about-us',
  contact: '/contact-us',
  faqs: '/faqs',
  page403: '/error/403',
  page404: '/error/404',
  page500: '/error/500',
  components: '/components',
  docs: 'https://docs.minimals.cc',
  changelog: 'https://docs.minimals.cc/changelog',
  zoneStore: 'https://mui.com/store/items/zone-landing-page/',
  minimalStore: 'https://mui.com/store/items/minimal-dashboard/',
  freeUI: 'https://mui.com/store/items/minimal-dashboard-free/',
  figmaUrl: 'https://www.figma.com/design/cAPz4pYPtQEXivqe11EcDE/%5BPreview%5D-Minimal-Web.v6.0.0',
  product: {
    root: `/product`,
    checkout: `/product/checkout`,
    details: (id) => `/product/${id}`,
    demo: { details: `/product/${MOCK_ID}` },
  },
  post: {
    root: `/post`,
    details: (title) => `/post/${paramCase(title)}`,
    demo: { details: `/post/${paramCase(MOCK_TITLE)}` },
  },
  // AUTH
  auth: {
    amplify: {
      signIn: `${ROOTS.AUTH}/amplify/sign-in`,
      verify: `${ROOTS.AUTH}/amplify/verify`,
      signUp: `${ROOTS.AUTH}/amplify/sign-up`,
      updatePassword: `${ROOTS.AUTH}/amplify/update-password`,
      resetPassword: `${ROOTS.AUTH}/amplify/reset-password`,
    },
    jwt: {
      signIn: `${ROOTS.AUTH}/jwt/sign-in`,
      signUp: `${ROOTS.AUTH}/jwt/sign-up`,
    },
    firebase: {
      signIn: `${ROOTS.AUTH}/firebase/sign-in`,
      verify: `${ROOTS.AUTH}/firebase/verify`,
      signUp: `${ROOTS.AUTH}/firebase/sign-up`,
      resetPassword: `${ROOTS.AUTH}/firebase/reset-password`,
    },
    auth0: {
      signIn: `${ROOTS.AUTH}/auth0/sign-in`,
    },
    supabase: {
      signIn: `${ROOTS.AUTH}/supabase/sign-in`,
      verify: `${ROOTS.AUTH}/supabase/verify`,
      signUp: `${ROOTS.AUTH}/supabase/sign-up`,
      updatePassword: `${ROOTS.AUTH}/supabase/update-password`,
      resetPassword: `${ROOTS.AUTH}/supabase/reset-password`,
    },
  },
  authDemo: {
    split: {
      signIn: `${ROOTS.AUTH_DEMO}/split/sign-in`,
      signUp: `${ROOTS.AUTH_DEMO}/split/sign-up`,
      resetPassword: `${ROOTS.AUTH_DEMO}/split/reset-password`,
      updatePassword: `${ROOTS.AUTH_DEMO}/split/update-password`,
      verify: `${ROOTS.AUTH_DEMO}/split/verify`,
    },
    centered: {
      signIn: `${ROOTS.AUTH_DEMO}/centered/sign-in`,
      signUp: `${ROOTS.AUTH_DEMO}/centered/sign-up`,
      resetPassword: `${ROOTS.AUTH_DEMO}/centered/reset-password`,
      updatePassword: `${ROOTS.AUTH_DEMO}/centered/update-password`,
      verify: `${ROOTS.AUTH_DEMO}/centered/verify`,
    },
  },
  // DASHBOARD
  dashboard: {
    root: ROOTS.DASHBOARD,

    // brianna custom routes start
    quiz1: `${ROOTS.DASHBOARD}/iteawd-quiz1`,
    ls1: `${ROOTS.DASHBOARD}/iteawd-midtermLabs-ls1`,
    ls2: `${ROOTS.DASHBOARD}/iteawd-midtermLabs-ls2`,
    ls3: `${ROOTS.DASHBOARD}/iteawd-midtermLabs-ls3`,
    ls4: `${ROOTS.DASHBOARD}/iteawd-midtermLabs-ls4`,
    lq: `${ROOTS.DASHBOARD}/iteawd-midtermLabs-lq`,

    ls6: {
      root: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls6`,
      inputs: {
        root: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls6/inputs`,

        // ---- Autocomplete Section ----
        autocomplete: {
          root: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls6/inputs/autocomplete`,
          comboBox: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls6/inputs/autocomplete/combobox`,
          grouped: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls6/inputs/autocomplete/grouped`,
          disabledOptions: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls6/inputs/autocomplete/disabledOptions`,
          multipleValues: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls6/inputs/autocomplete/multipleValues`,
          fixedOptions: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls6/inputs/autocomplete/fixedOptions`,
          checkboxes: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls6/inputs/autocomplete/checkboxes`,
          limitTags: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls6/inputs/autocomplete/limitTags`,
          sizes: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls6/inputs/autocomplete/sizes`,
        },

        // ---- Button Section ----
        button: {
          root: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls6/inputs/button`,
          basic: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls6/inputs/button/basic`,
          text: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls6/inputs/button/text`,
          contained: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls6/inputs/button/contained`,
          outlined: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls6/inputs/button/outlined`,
          color: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls6/inputs/button/color`,
          sizes: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls6/inputs/button/sizes`,
          iconsAndLabel: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls6/inputs/button/iconsAndLabel`,
          iconButton: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls6/inputs/button/iconButton`,
          loading: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls6/inputs/button/loading`,
          badge: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls6/inputs/button/badge`,
        },

        // ---- Button Group Section ----
        buttonGroup: {
          root: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls6/inputs/buttonGroup`,
          basicButtonGroup: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls6/inputs/buttonGroup/basicButtonGroup`,
          buttonVariants: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls6/inputs/buttonGroup/buttonVariants`,
          sizesAndColors: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls6/inputs/buttonGroup/sizesAndColors`,
          verticalGroup: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls6/inputs/buttonGroup/verticalGroup`,
          splitButton: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls6/inputs/buttonGroup/splitButton`,
        },

        // ---- Checkbox Section ----
        checkbox: {
          root: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls6/inputs/checkbox`,
          basicCheckBoxes: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls6/inputs/checkbox/basicCheckBoxes`,
          label: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls6/inputs/checkbox/label`,
          size: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls6/inputs/checkbox/size`,
          color: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls6/inputs/checkbox/color`,
          icon: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls6/inputs/checkbox/icon`,
          controlled: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls6/inputs/checkbox/controlled`,
          indeterminate: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls6/inputs/checkbox/indeterminate`,
          formGroup: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls6/inputs/checkbox/formGroup`,
          labelPlacement: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls6/inputs/checkbox/labelPlacement`,
        },

        // ---- Floating Action Button Section ----
        floatingActionButton: {
          root: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls6/inputs/floatingActionButton`,
          basicFab: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls6/inputs/floatingActionButton/basicFab`,
          size: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls6/inputs/floatingActionButton/size`,
          animation: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls6/inputs/floatingActionButton/animation`,
        },

        // ---- Radio Group Section ----
        radioGroup: {
          root: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls6/inputs/radioGroup`,
          radioGroup: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls6/inputs/radioGroup/radioGroup`,
          direction: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls6/inputs/radioGroup/direction`,
          controlled: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls6/inputs/radioGroup/controlled`,
          size: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls6/inputs/radioGroup/size`,
          color: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls6/inputs/radioGroup/color`,
          labelPlacement: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls6/inputs/radioGroup/labelPlacement`,
          showError: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls6/inputs/radioGroup/showError`,
        },

        // ---- Rating Section ----
        rating: {
          root: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls6/inputs/rating`,
          basicRating: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls6/inputs/rating/basicRating`,
          ratingPrecision: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls6/inputs/rating/ratingPrecision`,
          hoverFeedback: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls6/inputs/rating/hoverFeedback`,
          sizes: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls6/inputs/rating/sizes`,
          customization: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls6/inputs/rating/customization`,
          radioGroup: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls6/inputs/rating/radioGroup`,
        },

        // ---- Select Section ----
        select: {
          root: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls6/inputs/select`,
          basicSelect: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls6/inputs/select/basicSelect`,
          filledAndStandVar: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls6/inputs/select/filledAndStandVar`,
          labelsAndHelperText: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls6/inputs/select/labelsAndHelperText`,
          autowidth: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls6/inputs/select/autowidth`,
          smallSize: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls6/inputs/select/smallSize`,
        },

        // ---- Slider Section ----
        slider: {
          root: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls6/inputs/sliders`,
          continuousSliders: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls6/inputs/sliders/continuousSliders`,
          sizes: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls6/inputs/sliders/sizes`,
          discreteSliders: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls6/inputs/sliders/discreteSliders`,
          smallSteps: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls6/inputs/sliders/smallSteps`,
          customMarks: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls6/inputs/sliders/customMarks`,
          restrictedValues: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls6/inputs/sliders/restrictedValues`,
          labelAlwaysVisible: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls6/inputs/sliders/labelAlwaysVisible`,
          rangeSlider: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls6/inputs/sliders/rangeSlider`,
          sliderWithInputField: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls6/inputs/sliders/sliderWithInputField`,
          color: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls6/inputs/sliders/color`,
          musicPlayer: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls6/inputs/sliders/musicPlayer`,
          verticalSliders: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls6/inputs/sliders/verticalSliders`,
          marksPlacement: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls6/inputs/sliders/marksPlacement`,
          nonLinearScale: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls6/inputs/sliders/nonLinearScale`,
        },

        // ---- Switch Section ----
        switch: {
          root: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls6/inputs/switch`,
          basicSwitches: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls6/inputs/switch/basicSwitches`,
          label: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls6/inputs/switch/label`,
          size: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls6/inputs/switch/size`,
          color: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls6/inputs/switch/color`,
          controlled: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls6/inputs/switch/controlled`,
          switchesWithFormGroup: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls6/inputs/switch/switchesWithFormGroup`,
        },

        // ---- Text Field Section ----
        textField: {
          root: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls6/inputs/textField`,
          basicTextField: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls6/inputs/textField/basicTextField`,
          formProps: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls6/inputs/textField/formProps`,
          validation: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls6/inputs/textField/validation`,
          multiline: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls6/inputs/textField/multiline`,
          select: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls6/inputs/textField/select`,
          icons: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls6/inputs/textField/icons`,
          inputAdornments: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls6/inputs/textField/inputAdornments`,
          customizingAdornments: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls6/inputs/textField/customizingAdornments`,
          sizes: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls6/inputs/textField/sizes`,
          fullWidth: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls6/inputs/textField/fullWidth`,
          color: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls6/inputs/textField/color`,
        },

        // ---- Transfer List Section ----
        transferList: {
          root: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls6/inputs/transferList`,
          basicTransferList: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls6/inputs/transferList/basicTransferList`,
          enhancedTransferList: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls6/inputs/transferList/enhancedTransferList`,
        },

        // ---- Toggle Button Section ----
        toggleButton: {
          root: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls6/inputs/toggleButton`,
          exclusiveSelection: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls6/inputs/toggleButton/exclusiveSelection`,
          multipleSelection: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls6/inputs/toggleButton/multipleSelection`,
          size: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls6/inputs/toggleButton/size`,
          color: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls6/inputs/toggleButton/color`,
          verticalButtons: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls6/inputs/toggleButton/verticalButtons`,
          standaloneToggleButton: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls6/inputs/toggleButton/standaloneToggleButton`,
          horizontalSpacing: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls6/inputs/toggleButton/horizontalSpacing`,
          verticalSpacing: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls6/inputs/toggleButton/verticalSpacing`,
        },
      },
      dataDisplays: {
        root: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls6/dataDisplays`,

        // ---- Avatar Section ----
        avatar: {
          root: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls6/dataDisplays/avatar`,
          imageAvatars: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls6/dataDisplays/avatar/imageAvatars`,
          letterAvatars: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls6/dataDisplays/avatar/letterAvatars`,
          sizes: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls6/dataDisplays/avatar/sizes`,
          iconAvatars: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls6/dataDisplays/avatar/iconAvatars`,
          variants: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls6/dataDisplays/avatar/variants`,
          fallbacks: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls6/dataDisplays/avatar/fallbacks`,
          grouped: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls6/dataDisplays/avatar/grouped`,
          totalAvatars: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls6/dataDisplays/avatar/totalAvatars`,
          spacing: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls6/dataDisplays/avatar/spacing`,
          withBadge: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls6/dataDisplays/avatar/withBadge`,
        },
        // ---- Badge Section ----
        badge: {
          root: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls6/dataDisplays/badge`,
          basicBadge: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls6/dataDisplays/badge/basicBadge`,
          color: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls6/dataDisplays/badge/color`,
          badgeVisibility: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls6/dataDisplays/badge/badgeVisibility`,
          maximumValue: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls6/dataDisplays/badge/maximumValue`,
          dotBadge: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls6/dataDisplays/badge/dotBadge`,
          badgeAlignment: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls6/dataDisplays/badge/badgeAlignment`,
        },
        // ---- Chip Section ----
        chip: {
          root: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls6/dataDisplays/chip`,
          basicChip: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls6/dataDisplays/chip/basicChip`,
          clickable: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls6/dataDisplays/chip/clickable`,
          deletable: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls6/dataDisplays/chip/deletable`,
          customDeleteIcon: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls6/dataDisplays/chip/customDeleteIcon`,
          avatarChip: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls6/dataDisplays/chip/avatarChip`,
          iconChip: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls6/dataDisplays/chip/iconChip`,
          colorChip: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls6/dataDisplays/chip/colorChip`,
          sizesChip: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls6/dataDisplays/chip/sizesChip`,
          multilineChip: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls6/dataDisplays/chip/multilineChip`,
          chipArray: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls6/dataDisplays/chip/chipArray`,
        },
        // ---- Divider Section ----
        divider: {
          root: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls6/dataDisplays/divider`,
          introduction: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls6/dataDisplays/divider/introduction`,
          variants: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls6/dataDisplays/divider/variants`,
          orientation: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls6/dataDisplays/divider/orientation`,
          flexItem: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls6/dataDisplays/divider/flexItem`,
          withChildren: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls6/dataDisplays/divider/withChildren`,
          useWithAList: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls6/dataDisplays/divider/useWithAList`,
          iconGroup: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls6/dataDisplays/divider/iconGroup`,
        },
        // ---- Table Section ----
        table: {
          root: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls6/dataDisplays/table`,
          basicTable: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls6/dataDisplays/table/basicTable`,
          dataTable: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls6/dataDisplays/table/dataTable`,
          denseTable: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls6/dataDisplays/table/denseTable`,
        },
        // ---- Tooltip Section ----
        tooltip: {
          root: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls6/dataDisplays/tooltip`,
          basicTooltip: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls6/dataDisplays/tooltip/basicTooltip`,
          positionedTooltips: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls6/dataDisplays/tooltip/positionedTooltips`,
          arrowTooltips: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls6/dataDisplays/tooltip/arrowTooltips`,
          distanceFromAnchor: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls6/dataDisplays/tooltip/distanceFromAnchor`,
          triggers: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls6/dataDisplays/tooltip/triggers`,
          variableWidth: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls6/dataDisplays/tooltip/variableWidth`,
          disabledElements: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls6/dataDisplays/tooltip/disabledElements`,
          transitions: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls6/dataDisplays/tooltip/transitions`,
          followCursor: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls6/dataDisplays/tooltip/followCursor`,
          virtualElement: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls6/dataDisplays/tooltip/virtualElement`,
          showingAndHiding: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls6/dataDisplays/tooltip/showingAndHiding`,
        },
        // ---- Typography Section ----
        typography: {
          root: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls6/dataDisplays/typography`,
          usage: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls6/dataDisplays/typography/usage`,
        },
      },
    },

    ls7: {
      root: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls7`,
      feedback: {
        root: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls7/feedback`,

        // ---- Alert Section ----
        alert: {
          root: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls7/feedback/alert`,
          introduction: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls7/feedback/alert/introduction`,
          severity: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls7/feedback/alert/severity`,
          variants: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls7/feedback/alert/variants`,
          color: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls7/feedback/alert/color`,
          actions: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls7/feedback/alert/actions`,
          icons: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls7/feedback/alert/icons`,
          transitions: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls7/feedback/alert/transitions`,
        },

        // ---- Backdrop Section ----
        backdrop: {
          root: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls7/feedback/backdrop`,
          example: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls7/feedback/backdrop/example`,
        },

        // ---- Dialog Section ----
        dialog: {
          root: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls7/feedback/dialog`,
          introduction: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls7/feedback/dialog/introduction`,
          alerts: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls7/feedback/dialog/alerts`,
          transitions: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls7/feedback/dialog/transitions`,
          formDialogs: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls7/feedback/dialog/formDialogs`,
          customization: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls7/feedback/dialog/customization`,
          fullScreenDialogs: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls7/feedback/dialog/fullScreenDialogs`,
          optionalSizes: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls7/feedback/dialog/optionalSizes`,
          responsiveFullScreen: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls7/feedback/dialog/responsiveFullScreen`,
          confirmationDialogs: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls7/feedback/dialog/confirmationDialogs`,
          nonModalDialogs: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls7/feedback/dialog/nonModalDialogs`,
          draggableDialog: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls7/feedback/dialog/draggableDialog`,
          scrollingLongContent: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls7/feedback/dialog/scrollingLongContent`,
        },

        // ---- Progress Section ----
        progress: {
          root: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls7/feedback/progress`,
          circular: {
            root: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls7/feedback/progress/circular`,
            circularIndeterminate: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls7/feedback/progress/circular/circularIndeterminate`,
            circularColor: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls7/feedback/progress/circular/circularColor`,
            circularSize: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls7/feedback/progress/circular/circularSize`,
            circularDeterminate: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls7/feedback/progress/circular/circularDeterminate`,
            circularTrack: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls7/feedback/progress/circular/circularTrack`,
          },
          interactiveIntegration: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls7/feedback/progress/interactiveIntegration`,
          circularWithLabel: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls7/feedback/progress/circularWithLabel`,
          linear: {
            root: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls7/feedback/progress/linear`,
            linearIndeterminate: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls7/feedback/progress/linear/linearIndeterminate`,
            linearColor: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls7/feedback/progress/linear/linearColor`,
            linearDeterminate: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls7/feedback/progress/linear/linearDeterminate`,
            linearBuffer: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls7/feedback/progress/linear/linearBuffer`,
            linearWithLabel: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls7/feedback/progress/linear/linearWithLabel`,
          },
          delayingAppearance: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls7/feedback/progress/delayingAppearance`,
        },

        // ---- Skeleton Section ----
        skeleton: {
          root: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls7/feedback/skeleton`,
          variants: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls7/feedback/skeleton/variants`,
          animations: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls7/feedback/skeleton/animations`,
          pulsateExample: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls7/feedback/skeleton/pulsateExample`,
          waveExample: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls7/feedback/skeleton/waveExample`,
          inferringDimensions: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls7/feedback/skeleton/inferringDimensions`,
          color: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls7/feedback/skeleton/color`,
        },

        // ---- Snackbar Section ----
        snackbar: {
          root: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls7/feedback/snackbar`,
          introduction: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls7/feedback/snackbar/introduction`,
          basics: {
            root: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls7/feedback/snackbar/basics`,
            position: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls7/feedback/snackbar/basics/position`,
            content: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls7/feedback/snackbar/basics/content`,
            automaticDismiss: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls7/feedback/snackbar/basics/automaticDismiss`,
            transitions: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls7/feedback/snackbar/basics/transitions`,
          },
          useWithAlerts: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls7/feedback/snackbar/useWithAlerts`,
          consecutiveSnackbars: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls7/feedback/snackbar/consecutiveSnackbars`,
        },
      },

      surfaces: {
        root: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls7/surfaces`,

        // ---- Accordion Section ----
        accordion: {
          root: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls7/surfaces/accordion`,
          introduction: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls7/surfaces/accordion/introduction`,
          expandIcon: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls7/surfaces/accordion/expandIcon`,
          expandedByDefault: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls7/surfaces/accordion/expandedByDefault`,
          transition: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls7/surfaces/accordion/transition`,
          disabledItem: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls7/surfaces/accordion/disabledItem`,
        },

        // ---- App Bar Section ----
        appBar: {
          root: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls7/surfaces/appBar`,
          basicAppBar: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls7/surfaces/appBar/basicAppBar`,
          appBarWithMenu: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls7/surfaces/appBar/appBarWithMenu`,
          appBarWithResponsiveMenu: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls7/surfaces/appBar/appBarWithResponsiveMenu`,
          appBarWithSearchField: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls7/surfaces/appBar/appBarWithSearchField`,
          responsiveAppBarWithDrawer: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls7/surfaces/appBar/responsiveAppBarWithDrawer`,
          appBarWithPrimarySearchField: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls7/surfaces/appBar/appBarWithPrimarySearchField`,
          dense: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls7/surfaces/appBar/dense`,
          prominent: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls7/surfaces/appBar/prominent`,
          bottomAppBar: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls7/surfaces/appBar/bottomAppBar`,
          hideAppBar: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls7/surfaces/appBar/hideAppBar`,
          elevateAppBar: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls7/surfaces/appBar/elevateAppBar`,
          backToTop: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls7/surfaces/appBar/backToTop`,
        },

        // ---- Card Section ----
        card: {
          root: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls7/surfaces/card`,
          introduction: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls7/surfaces/card/introduction`,
          outlinedCard: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls7/surfaces/card/outlinedCard`,
          complexInteraction: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls7/surfaces/card/complexInteraction`,
          media: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls7/surfaces/card/media`,
          primaryAction: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls7/surfaces/card/primaryAction`,
          uiControls: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls7/surfaces/card/uiControls`,
          activeStateStyles: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls7/surfaces/card/activeStateStyles`,
        },

        // ---- Paper Section ----
        paper: {
          root: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls7/surfaces/paper`,
          introduction: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls7/surfaces/paper/introduction`,
          elevation: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls7/surfaces/paper/elevation`,
          variants: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls7/surfaces/paper/variants`,
          corners: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls7/surfaces/paper/corners`,
        },
      },

      navigation: {
        root: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls7/navigation`,

        // ---- Bottom Navigation Section ----
        bottomNavigation: {
          root: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls7/navigation/bottomNavigation`,
          bottomNavigation: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls7/navigation/bottomNavigation/bottomNavigation`,
          bottomNavigationWithNoLabel: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls7/navigation/bottomNavigation/bottomNavigationWithNoLabel`,
          fixedPositioning: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls7/navigation/bottomNavigation/fixedPositioning`,
        },

        // ---- Breadcrumbs Section ----
        breadcrumbs: {
          root: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls7/navigation/breadcrumbs`,
          basicBreadcrumbs: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls7/navigation/breadcrumbs/basicBreadcrumbs`,
          activeLastBreadcrumb: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls7/navigation/breadcrumbs/activeLastBreadcrumb`,
          customSeparator: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls7/navigation/breadcrumbs/customSeparator`,
          breadcrumbsWithIcons: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls7/navigation/breadcrumbs/breadcrumbsWithIcons`,
          collapsedBreadcrumbs: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls7/navigation/breadcrumbs/collapsedBreadcrumbs`,
          condensedWithMenu: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls7/navigation/breadcrumbs/condensedWithMenu`,
          customization: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls7/navigation/breadcrumbs/customization`,
        },

        // ---- Drawer Section ----
        drawer: {
          root: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls7/navigation/drawer`,
          temporaryDrawer: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls7/navigation/drawer/temporaryDrawer`,
          anchor: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls7/navigation/drawer/anchor`,
          swipeable: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls7/navigation/drawer/swipeable`,
          swipeableEdge: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls7/navigation/drawer/swipeableEdge`,
          responsiveDrawer: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls7/navigation/drawer/responsiveDrawer`,
          persistentDrawer: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls7/navigation/drawer/persistentDrawer`,
          miniVariantDrawer: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls7/navigation/drawer/miniVariantDrawer`,
          permanentDrawer: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls7/navigation/drawer/permanentDrawer`,
        },

        // ---- Link Section ----
        link: {
          root: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls7/navigation/link`,
          basicLinks: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls7/navigation/link/basicLinks`,
          underline: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls7/navigation/link/underline`,
        },

        // ---- Menu Section ----
        menu: {
          root: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls7/navigation/menu`,
          basicMenu: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls7/navigation/menu/basicMenu`,
          iconMenu: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls7/navigation/menu/iconMenu`,
          denseMenu: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls7/navigation/menu/denseMenu`,
          selectedMenu: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls7/navigation/menu/selectedMenu`,
          positionedMenu: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls7/navigation/menu/positionedMenu`,
          compositionWithMenuList: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls7/navigation/menu/compositionWithMenuList`,
          accountMenu: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls7/navigation/menu/accountMenu`,
          customization: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls7/navigation/menu/customization`,
          maxHeightMenu: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls7/navigation/menu/maxHeightMenu`,
          limitations: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls7/navigation/menu/limitations`,
          contextMenu: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls7/navigation/menu/contextMenu`,
          groupedMenu: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls7/navigation/menu/groupedMenu`,
        },

        // ---- Pagination Section ----
        pagination: {
          root: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls7/navigation/pagination`,
          basicPagination: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls7/navigation/pagination/basicPagination`,
          outlinedPagination: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls7/navigation/pagination/outlinedPagination`,
          roundedPagination: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls7/navigation/pagination/roundedPagination`,
          paginationSize: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls7/navigation/pagination/paginationSize`,
          buttons: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls7/navigation/pagination/buttons`,
          customIcons: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls7/navigation/pagination/customIcons`,
          paginationRanges: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls7/navigation/pagination/paginationRanges`,
          tablePagination: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls7/navigation/pagination/tablePagination`,
        },

        // ---- Speed Dial Section ----
        speedDial: {
          root: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls7/navigation/speedDial`,
          basicSpeedDial: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls7/navigation/speedDial/basicSpeedDial`,
          customCloseIcon: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls7/navigation/speedDial/customCloseIcon`,
          persistentActionTooltips: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls7/navigation/speedDial/persistentActionTooltips`,
        },

        // ---- Stepper Section ----
        stepper: {
          root: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls7/navigation/stepper`,
          linear: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls7/navigation/stepper/linear`,
          nonLinear: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls7/navigation/stepper/nonLinear`,
          alternativeLabel: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls7/navigation/stepper/alternativeLabel`,
          errorStep: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls7/navigation/stepper/errorStep`,
          verticalStepper: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls7/navigation/stepper/verticalStepper`,
          text: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls7/navigation/stepper/text`,
          dots: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls7/navigation/stepper/dots`,
          progress: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls7/navigation/stepper/progress`,
        },

        // ---- Tabs Section ----
        tabs: {
          root: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls7/navigation/tabs`,
          introduction: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls7/navigation/tabs/introduction`,
          wrappedLabels: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls7/navigation/tabs/wrappedLabels`,
          coloredTab: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls7/navigation/tabs/coloredTab`,
          disabledTab: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls7/navigation/tabs/disabledTab`,
          fullWidth: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls7/navigation/tabs/fullWidth`,
          centered: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls7/navigation/tabs/centered`,
          automaticScrollButtons: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls7/navigation/tabs/automaticScrollButtons`,
          forcedScrollButtons: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls7/navigation/tabs/forcedScrollButtons`,
          preventScrollButtons: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls7/navigation/tabs/preventScrollButtons`,
          verticalTabs: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls7/navigation/tabs/verticalTabs`,
          navTabs: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls7/navigation/tabs/navTabs`,
          iconTabs: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls7/navigation/tabs/iconTabs`,
          iconPosition: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-ls7/navigation/tabs/iconPosition`,
        },
      },
    },


    q345: {
      root: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-q345`,
      
      scenario1: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-q345/scenario1`,
      scenario2: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-q345/scenario2`,
      scenario3: `${ROOTS.DASHBOARD}/iteawd-finalsLabs-q345/scenario3`,
    },

    mail: `${ROOTS.DASHBOARD}/mail`,
    chat: `${ROOTS.DASHBOARD}/chat`,
    blank: `${ROOTS.DASHBOARD}/blank`,
    kanban: `${ROOTS.DASHBOARD}/kanban`,
    calendar: `${ROOTS.DASHBOARD}/calendar`,
    fileManager: `${ROOTS.DASHBOARD}/file-manager`,
    permission: `${ROOTS.DASHBOARD}/permission`,
    general: {
      app: `${ROOTS.DASHBOARD}/app`,
      ecommerce: `${ROOTS.DASHBOARD}/ecommerce`,
      analytics: `${ROOTS.DASHBOARD}/analytics`,
      banking: `${ROOTS.DASHBOARD}/banking`,
      booking: `${ROOTS.DASHBOARD}/booking`,
      file: `${ROOTS.DASHBOARD}/file`,
      course: `${ROOTS.DASHBOARD}/course`,
    },
    user: {
      root: `${ROOTS.DASHBOARD}/user`,
      new: `${ROOTS.DASHBOARD}/user/new`,
      list: `${ROOTS.DASHBOARD}/user/list`,
      cards: `${ROOTS.DASHBOARD}/user/cards`,
      profile: `${ROOTS.DASHBOARD}/user/profile`,
      account: `${ROOTS.DASHBOARD}/user/account`,
      edit: (id) => `${ROOTS.DASHBOARD}/user/${id}/edit`,
      demo: {
        edit: `${ROOTS.DASHBOARD}/user/${MOCK_ID}/edit`,
      },
    },
    product: {
      root: `${ROOTS.DASHBOARD}/product`,
      new: `${ROOTS.DASHBOARD}/product/new`,
      details: (id) => `${ROOTS.DASHBOARD}/product/${id}`,
      edit: (id) => `${ROOTS.DASHBOARD}/product/${id}/edit`,
      demo: {
        details: `${ROOTS.DASHBOARD}/product/${MOCK_ID}`,
        edit: `${ROOTS.DASHBOARD}/product/${MOCK_ID}/edit`,
      },
    },
    invoice: {
      root: `${ROOTS.DASHBOARD}/invoice`,
      new: `${ROOTS.DASHBOARD}/invoice/new`,
      details: (id) => `${ROOTS.DASHBOARD}/invoice/${id}`,
      edit: (id) => `${ROOTS.DASHBOARD}/invoice/${id}/edit`,
      demo: {
        details: `${ROOTS.DASHBOARD}/invoice/${MOCK_ID}`,
        edit: `${ROOTS.DASHBOARD}/invoice/${MOCK_ID}/edit`,
      },
    },
    post: {
      root: `${ROOTS.DASHBOARD}/post`,
      new: `${ROOTS.DASHBOARD}/post/new`,
      details: (title) => `${ROOTS.DASHBOARD}/post/${paramCase(title)}`,
      edit: (title) => `${ROOTS.DASHBOARD}/post/${paramCase(title)}/edit`,
      demo: {
        details: `${ROOTS.DASHBOARD}/post/${paramCase(MOCK_TITLE)}`,
        edit: `${ROOTS.DASHBOARD}/post/${paramCase(MOCK_TITLE)}/edit`,
      },
    },
    order: {
      root: `${ROOTS.DASHBOARD}/order`,
      details: (id) => `${ROOTS.DASHBOARD}/order/${id}`,
      demo: {
        details: `${ROOTS.DASHBOARD}/order/${MOCK_ID}`,
      },
    },
    job: {
      root: `${ROOTS.DASHBOARD}/job`,
      new: `${ROOTS.DASHBOARD}/job/new`,
      details: (id) => `${ROOTS.DASHBOARD}/job/${id}`,
      edit: (id) => `${ROOTS.DASHBOARD}/job/${id}/edit`,
      demo: {
        details: `${ROOTS.DASHBOARD}/job/${MOCK_ID}`,
        edit: `${ROOTS.DASHBOARD}/job/${MOCK_ID}/edit`,
      },
    },
    tour: {
      root: `${ROOTS.DASHBOARD}/tour`,
      new: `${ROOTS.DASHBOARD}/tour/new`,
      details: (id) => `${ROOTS.DASHBOARD}/tour/${id}`,
      edit: (id) => `${ROOTS.DASHBOARD}/tour/${id}/edit`,
      demo: {
        details: `${ROOTS.DASHBOARD}/tour/${MOCK_ID}`,
        edit: `${ROOTS.DASHBOARD}/tour/${MOCK_ID}/edit`,
      },
    },
  },
};
