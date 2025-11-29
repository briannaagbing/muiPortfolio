import { paths } from 'src/routes/paths';

import { CONFIG } from 'src/config-global';

import { Label } from 'src/components/label';
import { Iconify } from 'src/components/iconify';
import { SvgColor } from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`${CONFIG.assetsDir}/assets/icons/navbar/${name}.svg`} />;

const ICONS = {
  job: icon('ic-job'),
  blog: icon('ic-blog'),
  chat: icon('ic-chat'),
  mail: icon('ic-mail'),
  user: icon('ic-user'),
  file: icon('ic-file'),
  lock: icon('ic-lock'),
  tour: icon('ic-tour'),
  order: icon('ic-order'),
  label: icon('ic-label'),
  blank: icon('ic-blank'),
  kanban: icon('ic-kanban'),
  folder: icon('ic-folder'),
  course: icon('ic-course'),
  banking: icon('ic-banking'),
  booking: icon('ic-booking'),
  invoice: icon('ic-invoice'),
  product: icon('ic-product'),
  calendar: icon('ic-calendar'),
  disabled: icon('ic-disabled'),
  external: icon('ic-external'),
  menuItem: icon('ic-menu-item'),
  ecommerce: icon('ic-ecommerce'),
  analytics: icon('ic-analytics'),
  dashboard: icon('ic-dashboard'),
  parameter: icon('ic-parameter'),
};

// ----------------------------------------------------------------------

export const navData = [

  /**
   * Brianna custom pages
   */
  {
    subheader: 'Midterm Laboratories',
    items: [
      { title: 'Laboratory Seatwork 1', path: paths.dashboard.ls1, icon: ICONS.booking },
      { title: 'Laboratory Seatwork 2', path: paths.dashboard.ls2, icon: ICONS.booking },
      { title: 'Laboratory Seatwork 3', path: paths.dashboard.ls3, icon: ICONS.booking },
      { title: 'Laboratory Seatwork 4', path: paths.dashboard.ls4, icon: ICONS.booking },
      { title: 'Long Quiz', path: paths.dashboard.lq, icon: ICONS.booking },
    ],
  },
  {
    subheader: 'Finals Laboratories',
    items: [
      {
        title: 'Laboratory Seatwork 6',
        path: paths.dashboard.ls6.root,
        icon: ICONS.menuItem,
        children: [
          {
            title: 'Inputs and Data Display', path: paths.dashboard.ls6.root,
            children: [
              {
                title: 'Inputs', path: paths.dashboard.ls6.inputs.root,
                children: [
                  {
                    title: 'Autocomplete',
                    path: paths.dashboard.ls6.inputs.autocomplete.root,
                    children: [
                      { title: 'Combo Box', path: paths.dashboard.ls6.inputs.autocomplete.comboBox },
                      { title: 'Grouped', path: paths.dashboard.ls6.inputs.autocomplete.grouped },
                      { title: 'Disabled Options', path: paths.dashboard.ls6.inputs.autocomplete.disabledOptions },
                      { title: 'Multiple Values', path: paths.dashboard.ls6.inputs.autocomplete.multipleValues },
                      { title: 'Fixed Options', path: paths.dashboard.ls6.inputs.autocomplete.fixedOptions },
                      { title: 'Checkboxes', path: paths.dashboard.ls6.inputs.autocomplete.checkboxes },
                      { title: 'Limit Tags', path: paths.dashboard.ls6.inputs.autocomplete.limitTags },
                      { title: 'Sizes', path: paths.dashboard.ls6.inputs.autocomplete.sizes },
                    ],
                  },
                  {
                    title: 'Button',
                    path: paths.dashboard.ls6.inputs.button.root,
                    children: [
                      { title: 'Basic Button', path: paths.dashboard.ls6.inputs.button.basic },
                      { title: 'Text Button', path: paths.dashboard.ls6.inputs.button.text },
                      { title: 'Contained Button', path: paths.dashboard.ls6.inputs.button.contained },
                      { title: 'Outlined Button', path: paths.dashboard.ls6.inputs.button.outlined },
                      { title: 'Color', path: paths.dashboard.ls6.inputs.button.color },
                      { title: 'Sizes', path: paths.dashboard.ls6.inputs.button.sizes },
                      { title: 'Buttons with Icons and Label', path: paths.dashboard.ls6.inputs.button.iconsAndLabel },
                      { title: 'Icon Button', path: paths.dashboard.ls6.inputs.button.iconButton },
                      { title: 'Loading', path: paths.dashboard.ls6.inputs.button.loading },
                      { title: 'Badge', path: paths.dashboard.ls6.inputs.button.badge },
                    ],
                  },
                  {
                    title: 'Button Group',
                    path: paths.dashboard.ls6.inputs.buttonGroup.root,
                    children: [
                      { title: 'Basic Button Group', path: paths.dashboard.ls6.inputs.buttonGroup.basicButtonGroup },
                      { title: 'Button Variants', path: paths.dashboard.ls6.inputs.buttonGroup.buttonVariants },
                      { title: 'Sizes and Colors', path: paths.dashboard.ls6.inputs.buttonGroup.sizesAndColors },
                      { title: 'Vertical Group', path: paths.dashboard.ls6.inputs.buttonGroup.verticalGroup },
                      { title: 'Split Button', path: paths.dashboard.ls6.inputs.buttonGroup.splitButton },
                    ],
                  },
                  {
                    title: 'Checkbox',
                    path: paths.dashboard.ls6.inputs.checkbox.root,
                    children: [
                      { title: 'Basic Checkboxes', path: paths.dashboard.ls6.inputs.checkbox.basicCheckBoxes },
                      { title: 'Label', path: paths.dashboard.ls6.inputs.checkbox.label },
                      { title: 'Size', path: paths.dashboard.ls6.inputs.checkbox.size },
                      { title: 'Color', path: paths.dashboard.ls6.inputs.checkbox.color },
                      { title: 'Icon', path: paths.dashboard.ls6.inputs.checkbox.icon },
                      { title: 'Controlled', path: paths.dashboard.ls6.inputs.checkbox.controlled },
                      { title: 'Indeterminate', path: paths.dashboard.ls6.inputs.checkbox.indeterminate },
                      { title: 'FormGroup', path: paths.dashboard.ls6.inputs.checkbox.formGroup },
                      { title: 'Label Placement', path: paths.dashboard.ls6.inputs.checkbox.labelPlacement },
                    ],
                  },
                  {
                    title: 'Floating Action Button',
                    path: paths.dashboard.ls6.inputs.floatingActionButton.root,
                    children: [
                      { title: 'Basic FAB', path: paths.dashboard.ls6.inputs.floatingActionButton.basicFab },
                      { title: 'Size', path: paths.dashboard.ls6.inputs.floatingActionButton.size },
                      { title: 'Animation', path: paths.dashboard.ls6.inputs.floatingActionButton.animation },
                    ],
                  },
                  {
                    title: 'Radio Group',
                    path: paths.dashboard.ls6.inputs.radioGroup.root,
                    children: [
                      { title: 'Radio Group', path: paths.dashboard.ls6.inputs.radioGroup.radioGroup },
                      { title: 'Direction', path: paths.dashboard.ls6.inputs.radioGroup.direction },
                      { title: 'Controlled', path: paths.dashboard.ls6.inputs.radioGroup.controlled },
                      { title: 'Size', path: paths.dashboard.ls6.inputs.radioGroup.size },
                      { title: 'Color', path: paths.dashboard.ls6.inputs.radioGroup.color },
                      { title: 'Label Placement', path: paths.dashboard.ls6.inputs.radioGroup.labelPlacement },
                      { title: 'Show Error', path: paths.dashboard.ls6.inputs.radioGroup.showError },
                    ],
                  },
                  {
                    title: 'Rating',
                    path: paths.dashboard.ls6.inputs.rating.root,
                    children: [
                      { title: 'Basic Rating', path: paths.dashboard.ls6.inputs.rating.basicRating },
                      { title: 'Rating Precision', path: paths.dashboard.ls6.inputs.rating.ratingPrecision },
                      { title: 'Hover Feedback', path: paths.dashboard.ls6.inputs.rating.hoverFeedback },
                      { title: 'Sizes', path: paths.dashboard.ls6.inputs.rating.sizes },
                      { title: 'Customization', path: paths.dashboard.ls6.inputs.rating.customization },
                      { title: 'Radio Group', path: paths.dashboard.ls6.inputs.rating.radioGroup },
                    ],
                  },
                  {
                    title: 'Select',
                    path: paths.dashboard.ls6.inputs.select.root,
                    children: [
                      { title: 'Basic Select', path: paths.dashboard.ls6.inputs.select.basicSelect },
                      { title: 'Filled and Standard Variants', path: paths.dashboard.ls6.inputs.select.filledAndStandVar },
                      { title: 'Labels and Helper Text', path: paths.dashboard.ls6.inputs.select.labelsAndHelperText },
                      { title: 'Auto Width', path: paths.dashboard.ls6.inputs.select.autowidth },
                      { title: 'Small Size', path: paths.dashboard.ls6.inputs.select.smallSize },
                    ],
                  },
                  {
                    title: 'Slider',
                    path: paths.dashboard.ls6.inputs.slider.root,
                    children: [
                      { title: 'Continuous Sliders', path: paths.dashboard.ls6.inputs.slider.continuousSliders },
                      { title: 'Sizes', path: paths.dashboard.ls6.inputs.slider.sizes },
                      { title: 'Discrete Sliders', path: paths.dashboard.ls6.inputs.slider.discreteSliders },
                      { title: 'Small Steps', path: paths.dashboard.ls6.inputs.slider.smallSteps },
                      { title: 'Custom Marks', path: paths.dashboard.ls6.inputs.slider.customMarks },
                      { title: 'Restricted Values', path: paths.dashboard.ls6.inputs.slider.restrictedValues },
                      { title: 'Label Always Visible', path: paths.dashboard.ls6.inputs.slider.labelAlwaysVisible },
                      { title: 'Range Slider', path: paths.dashboard.ls6.inputs.slider.rangeSlider },
                      { title: 'Slider with Input Field', path: paths.dashboard.ls6.inputs.slider.sliderWithInputField },
                      { title: 'Color', path: paths.dashboard.ls6.inputs.slider.color },
                      { title: 'Music Player', path: paths.dashboard.ls6.inputs.slider.musicPlayer },
                      { title: 'Vertical Sliders', path: paths.dashboard.ls6.inputs.slider.verticalSliders },
                      { title: 'Marks Placement', path: paths.dashboard.ls6.inputs.slider.marksPlacement },
                      { title: 'Non-Linear Scale', path: paths.dashboard.ls6.inputs.slider.nonLinearScale },
                    ],
                  },
                  {
                    title: 'Switch',
                    path: paths.dashboard.ls6.inputs.switch.root,
                    children: [
                      { title: 'Basic Switches', path: paths.dashboard.ls6.inputs.switch.basicSwitches },
                      { title: 'Label', path: paths.dashboard.ls6.inputs.switch.label },
                      { title: 'Size', path: paths.dashboard.ls6.inputs.switch.size },
                      { title: 'Color', path: paths.dashboard.ls6.inputs.switch.color },
                      { title: 'Controlled', path: paths.dashboard.ls6.inputs.switch.controlled },
                      { title: 'Switches with FormGroup', path: paths.dashboard.ls6.inputs.switch.switchesWithFormGroup },
                    ],
                  },
                  {
                    title: 'Text Field',
                    path: paths.dashboard.ls6.inputs.textField.root,
                    children: [
                      { title: 'Basic Text Field', path: paths.dashboard.ls6.inputs.textField.basicTextField },
                      { title: 'Form Props', path: paths.dashboard.ls6.inputs.textField.formProps },
                      { title: 'Validation', path: paths.dashboard.ls6.inputs.textField.validation },
                      { title: 'Multiline', path: paths.dashboard.ls6.inputs.textField.multiline },
                      { title: 'Select', path: paths.dashboard.ls6.inputs.textField.select },
                      { title: 'Icons', path: paths.dashboard.ls6.inputs.textField.icons },
                      { title: 'Input Adornments', path: paths.dashboard.ls6.inputs.textField.inputAdornments },
                      { title: 'Customizing Adornments', path: paths.dashboard.ls6.inputs.textField.customizingAdornments },
                      { title: 'Sizes', path: paths.dashboard.ls6.inputs.textField.sizes },
                      { title: 'Full Width', path: paths.dashboard.ls6.inputs.textField.fullWidth },
                      { title: 'Color', path: paths.dashboard.ls6.inputs.textField.color },
                    ],
                  },
                  {
                    title: 'Transfer List',
                    path: paths.dashboard.ls6.inputs.transferList.root,
                    children: [
                      { title: 'Basic Transfer List', path: paths.dashboard.ls6.inputs.transferList.basicTransferList },
                      { title: 'Enhanced Transfer List', path: paths.dashboard.ls6.inputs.transferList.enhancedTransferList },
                    ],
                  },
                  {
                    title: 'Toggle Button',
                    path: paths.dashboard.ls6.inputs.toggleButton.root,
                    children: [
                      { title: 'Exclusive Selection', path: paths.dashboard.ls6.inputs.toggleButton.exclusiveSelection },
                      { title: 'Multiple Selection', path: paths.dashboard.ls6.inputs.toggleButton.multipleSelection },
                      { title: 'Size', path: paths.dashboard.ls6.inputs.toggleButton.size },
                      { title: 'Color', path: paths.dashboard.ls6.inputs.toggleButton.color },
                      { title: 'Vertical Buttons', path: paths.dashboard.ls6.inputs.toggleButton.verticalButtons },
                      { title: 'Standalone Toggle Button', path: paths.dashboard.ls6.inputs.toggleButton.standaloneToggleButton },
                      { title: 'Horizontal Spacing', path: paths.dashboard.ls6.inputs.toggleButton.horizontalSpacing },
                      { title: 'Vertical Spacing', path: paths.dashboard.ls6.inputs.toggleButton.verticalSpacing },
                    ],
                  },
                ],
              },
              {
                title: 'Data Displays', path: paths.dashboard.ls6.dataDisplays.root,
                children: [
                  {
                    title: 'Avatar',
                    path: paths.dashboard.ls6.dataDisplays.avatar.root,
                    children: [
                      { title: 'Image Avatars', path: paths.dashboard.ls6.dataDisplays.avatar.imageAvatars },
                      { title: 'Letter Avatars', path: paths.dashboard.ls6.dataDisplays.avatar.letterAvatars },
                      { title: 'Sizes', path: paths.dashboard.ls6.dataDisplays.avatar.sizes },
                      { title: 'Icon Avatars', path: paths.dashboard.ls6.dataDisplays.avatar.iconAvatars },
                      { title: 'Variants', path: paths.dashboard.ls6.dataDisplays.avatar.variants },
                      { title: 'Fallbacks', path: paths.dashboard.ls6.dataDisplays.avatar.fallbacks },
                      { title: 'Grouped', path: paths.dashboard.ls6.dataDisplays.avatar.grouped },
                      { title: 'Total Avatars', path: paths.dashboard.ls6.dataDisplays.avatar.totalAvatars },
                      { title: 'Spacing', path: paths.dashboard.ls6.dataDisplays.avatar.spacing },
                      { title: 'With Badge', path: paths.dashboard.ls6.dataDisplays.avatar.withBadge },
                    ]
                  },
                  {
                    title: 'Badge',
                    path: paths.dashboard.ls6.dataDisplays.badge.root,
                    children: [
                      { title: 'Basic Badge', path: paths.dashboard.ls6.dataDisplays.badge.basicBadge },
                      { title: 'Color', path: paths.dashboard.ls6.dataDisplays.badge.color },
                      { title: 'Badge Visibility', path: paths.dashboard.ls6.dataDisplays.badge.badgeVisibility },
                      { title: 'Maximum Value', path: paths.dashboard.ls6.dataDisplays.badge.maximumValue },
                      { title: 'Dot Badge', path: paths.dashboard.ls6.dataDisplays.badge.dotBadge },
                      { title: 'Badge Alignment', path: paths.dashboard.ls6.dataDisplays.badge.badgeAlignment },
                    ]
                  },
                  {
                    title: 'Chip',
                    path: paths.dashboard.ls6.dataDisplays.chip.root,
                    children: [
                      { title: 'Basic Chip', path: paths.dashboard.ls6.dataDisplays.chip.basicChip },
                      { title: 'Clickable', path: paths.dashboard.ls6.dataDisplays.chip.clickable },
                      { title: 'Deletable', path: paths.dashboard.ls6.dataDisplays.chip.deletable },
                      { title: 'Custom Delete Icon', path: paths.dashboard.ls6.dataDisplays.chip.customDeleteIcon },
                      { title: 'Avatar Chip', path: paths.dashboard.ls6.dataDisplays.chip.avatarChip },
                      { title: 'Icon Chip', path: paths.dashboard.ls6.dataDisplays.chip.iconChip },
                      { title: 'Color Chip', path: paths.dashboard.ls6.dataDisplays.chip.colorChip },
                      { title: 'Sizes Chip', path: paths.dashboard.ls6.dataDisplays.chip.sizesChip },
                      { title: 'Multiline Chip', path: paths.dashboard.ls6.dataDisplays.chip.multilineChip },
                      { title: 'Chip Array', path: paths.dashboard.ls6.dataDisplays.chip.chipArray },
                    ]
                  },
                  {
                    title: 'Divider',
                    path: paths.dashboard.ls6.dataDisplays.divider.root,
                    children: [
                      { title: 'Introduction', path: paths.dashboard.ls6.dataDisplays.divider.introduction },
                      { title: 'Variants', path: paths.dashboard.ls6.dataDisplays.divider.variants },
                      { title: 'Orientation', path: paths.dashboard.ls6.dataDisplays.divider.orientation },
                      { title: 'Flex Item', path: paths.dashboard.ls6.dataDisplays.divider.flexItem },
                      { title: 'With Children', path: paths.dashboard.ls6.dataDisplays.divider.withChildren },
                      { title: 'Use with a List', path: paths.dashboard.ls6.dataDisplays.divider.useWithAList },
                      { title: 'Icon Group', path: paths.dashboard.ls6.dataDisplays.divider.iconGroup },
                    ]
                  },
                  {
                    title: 'Table',
                    path: paths.dashboard.ls6.dataDisplays.table.root,
                    children: [
                      { title: 'Basic Table', path: paths.dashboard.ls6.dataDisplays.table.basicTable },
                      { title: 'Data Table', path: paths.dashboard.ls6.dataDisplays.table.dataTable },
                      { title: 'Dense Table', path: paths.dashboard.ls6.dataDisplays.table.denseTable },
                    ]
                  },
                  {
                    title: 'Tooltip',
                    path: paths.dashboard.ls6.dataDisplays.tooltip.root,
                    children: [
                      { title: 'Basic Tooltip', path: paths.dashboard.ls6.dataDisplays.tooltip.basicTooltip },
                      { title: 'Positioned Tooltips', path: paths.dashboard.ls6.dataDisplays.tooltip.positionedTooltips },
                      { title: 'Arrow Tooltips', path: paths.dashboard.ls6.dataDisplays.tooltip.arrowTooltips },
                      { title: 'Distance from Anchor', path: paths.dashboard.ls6.dataDisplays.tooltip.distanceFromAnchor },
                      { title: 'Triggers', path: paths.dashboard.ls6.dataDisplays.tooltip.triggers },
                      { title: 'Variable Width', path: paths.dashboard.ls6.dataDisplays.tooltip.variableWidth },
                      { title: 'Disabled Elements', path: paths.dashboard.ls6.dataDisplays.tooltip.disabledElements },
                      { title: 'Transitions', path: paths.dashboard.ls6.dataDisplays.tooltip.transitions },
                      { title: 'Follow Cursor', path: paths.dashboard.ls6.dataDisplays.tooltip.followCursor },
                      { title: 'Virtual Element', path: paths.dashboard.ls6.dataDisplays.tooltip.virtualElement },
                      { title: 'Showing and Hiding', path: paths.dashboard.ls6.dataDisplays.tooltip.showingAndHiding },
                    ]
                  },
                  {
                    title: 'Typography',
                    path: paths.dashboard.ls6.dataDisplays.typography.root,
                    children: [
                      { title: 'Usage', path: paths.dashboard.ls6.dataDisplays.typography.usage },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },

      {
        title: 'Laboratory Seatwork 7',
        path: paths.dashboard.ls7.root,
        icon: ICONS.menuItem,
        children: [
          {
            title: 'Feedback, Surfaces, and Navigation', path: paths.dashboard.ls7.root,
            children: [
              {
                title: 'Feedback', path: paths.dashboard.ls7.feedback.root,
                children: [
                  {
                    title: 'Alert',
                    path: paths.dashboard.ls7.feedback.alert.root,
                    children: [
                      { title: 'Introduction', path: paths.dashboard.ls7.feedback.alert.introduction },
                      { title: 'Severity', path: paths.dashboard.ls7.feedback.alert.severity },
                      { title: 'Variants', path: paths.dashboard.ls7.feedback.alert.variants },
                      { title: 'Color', path: paths.dashboard.ls7.feedback.alert.color },
                      { title: 'Actions', path: paths.dashboard.ls7.feedback.alert.actions },
                      { title: 'Icons', path: paths.dashboard.ls7.feedback.alert.icons },
                      { title: 'Transitions', path: paths.dashboard.ls7.feedback.alert.transitions },
                    ],
                  },
                  {
                    title: 'Backdrop',
                    path: paths.dashboard.ls7.feedback.backdrop.root,
                    children: [
                      { title: 'Example', path: paths.dashboard.ls7.feedback.backdrop.example },
                    ],
                  },
                  {
                    title: 'Dialog',
                    path: paths.dashboard.ls7.feedback.dialog.root,
                    children: [
                      { title: 'Introduction', path: paths.dashboard.ls7.feedback.dialog.introduction },
                      { title: 'Alerts', path: paths.dashboard.ls7.feedback.dialog.alerts },
                      { title: 'Transitions', path: paths.dashboard.ls7.feedback.dialog.transitions },
                      { title: 'Form Dialogs', path: paths.dashboard.ls7.feedback.dialog.formDialogs },
                      { title: 'Customization', path: paths.dashboard.ls7.feedback.dialog.customization },
                      { title: 'Full-Screen Dialogs', path: paths.dashboard.ls7.feedback.dialog.fullScreenDialogs },
                      { title: 'Optional Sizes', path: paths.dashboard.ls7.feedback.dialog.optionalSizes },
                      { title: 'Responsive Full-Screen', path: paths.dashboard.ls7.feedback.dialog.responsiveFullScreen },
                      { title: 'Confirmation Dialogs', path: paths.dashboard.ls7.feedback.dialog.confirmationDialogs },
                      { title: 'Non-Modal Dialogs', path: paths.dashboard.ls7.feedback.dialog.nonModalDialogs },
                      { title: 'Draggable Dialog', path: paths.dashboard.ls7.feedback.dialog.draggableDialog },
                      { title: 'Scrolling Long Content', path: paths.dashboard.ls7.feedback.dialog.scrollingLongContent },
                    ],
                  },
                  {
                    title: 'Progress',
                    path: paths.dashboard.ls7.feedback.progress.root,
                    children: [
                      {
                        title: 'Circular',
                        path: paths.dashboard.ls7.feedback.progress.circular.root,
                        children: [
                          { title: 'Circular Indeterminate', path: paths.dashboard.ls7.feedback.progress.circular.circularIndeterminate },
                          { title: 'Circular Color', path: paths.dashboard.ls7.feedback.progress.circular.circularColor },
                          { title: 'Circular Size', path: paths.dashboard.ls7.feedback.progress.circular.circularSize },
                          { title: 'Circular Determinate', path: paths.dashboard.ls7.feedback.progress.circular.circularDeterminate },
                          { title: 'Circular Track', path: paths.dashboard.ls7.feedback.progress.circular.circularTrack },
                        ],
                      },
                      { title: 'Interactive Integration', path: paths.dashboard.ls7.feedback.progress.interactiveIntegration },
                      { title: 'Circular with Label', path: paths.dashboard.ls7.feedback.progress.circularWithLabel },
                      {
                        title: 'Linear',
                        path: paths.dashboard.ls7.feedback.progress.linear.root,
                        children: [
                          { title: 'Linear Indeterminate', path: paths.dashboard.ls7.feedback.progress.linear.linearIndeterminate },
                          { title: 'Linear Color', path: paths.dashboard.ls7.feedback.progress.linear.linearColor },
                          { title: 'Linear Determinate', path: paths.dashboard.ls7.feedback.progress.linear.linearDeterminate },
                          { title: 'Linear Buffer', path: paths.dashboard.ls7.feedback.progress.linear.linearBuffer },
                          { title: 'Linear with Label', path: paths.dashboard.ls7.feedback.progress.linear.linearWithLabel },
                        ],
                      },
                      { title: 'Delaying Appearance', path: paths.dashboard.ls7.feedback.progress.delayingAppearance },
                    ],
                  },
                  {
                    title: 'Skeleton',
                    path: paths.dashboard.ls7.feedback.skeleton.root,
                    children: [
                      { title: 'Variants', path: paths.dashboard.ls7.feedback.skeleton.variants },
                      { title: 'Animations', path: paths.dashboard.ls7.feedback.skeleton.animations },
                      { title: 'Pulsate Example', path: paths.dashboard.ls7.feedback.skeleton.pulsateExample },
                      { title: 'Wave Example', path: paths.dashboard.ls7.feedback.skeleton.waveExample },
                      { title: 'Inferring Dimensions', path: paths.dashboard.ls7.feedback.skeleton.inferringDimensions },
                      { title: 'Color', path: paths.dashboard.ls7.feedback.skeleton.color },
                    ]
                  },
                  {
                    title: 'Snackbar',
                    path: paths.dashboard.ls7.feedback.snackbar.root,
                    children: [
                      { title: 'Introduction', path: paths.dashboard.ls7.feedback.snackbar.introduction },
                      {
                        title: 'Basics',
                        path: paths.dashboard.ls7.feedback.snackbar.basics.root,
                        children: [
                          { title: 'Position', path: paths.dashboard.ls7.feedback.snackbar.basics.position },
                          { title: 'Content', path: paths.dashboard.ls7.feedback.snackbar.basics.content },
                          { title: 'Automatic Dismiss', path: paths.dashboard.ls7.feedback.snackbar.basics.automaticDismiss },
                          { title: 'Transitions', path: paths.dashboard.ls7.feedback.snackbar.basics.transitions },
                        ],
                      },
                      { title: 'Use with Alerts', path: paths.dashboard.ls7.feedback.snackbar.useWithAlerts },
                      { title: 'Consecutive Snackbars', path: paths.dashboard.ls7.feedback.snackbar.consecutiveSnackbars },
                    ],
                  },
                ],
              },
              {
                title: 'Surfaces', path: paths.dashboard.ls7.surfaces.root,
                children: [
                  {
                    title: 'Accordion',
                    path: paths.dashboard.ls7.surfaces.accordion.root,
                    children: [
                      { title: 'Introduction', path: paths.dashboard.ls7.surfaces.accordion.introduction },
                      { title: 'Expand Icon', path: paths.dashboard.ls7.surfaces.accordion.expandIcon },
                      { title: 'Expanded by Default', path: paths.dashboard.ls7.surfaces.accordion.expandedByDefault },
                      { title: 'Transition', path: paths.dashboard.ls7.surfaces.accordion.transition },
                      { title: 'Disabled Item', path: paths.dashboard.ls7.surfaces.accordion.disabledItem },
                    ],
                  },
                  {
                    title: 'App Bar',
                    path: paths.dashboard.ls7.surfaces.appBar.root,
                    children: [
                      { title: 'Basic App Bar', path: paths.dashboard.ls7.surfaces.appBar.basicAppBar },
                      { title: 'App Bar with Menu', path: paths.dashboard.ls7.surfaces.appBar.appBarWithMenu },
                      { title: 'App Bar with Responsive Menu', path: paths.dashboard.ls7.surfaces.appBar.appBarWithResponsiveMenu },
                      { title: 'App Bar with Search Field', path: paths.dashboard.ls7.surfaces.appBar.appBarWithSearchField },
                      { title: 'Responsive App Bar with Drawer', path: paths.dashboard.ls7.surfaces.appBar.responsiveAppBarWithDrawer },
                      { title: 'App Bar with Primary Search Field', path: paths.dashboard.ls7.surfaces.appBar.appBarWithPrimarySearchField },
                      { title: 'Dense', path: paths.dashboard.ls7.surfaces.appBar.dense },
                      { title: 'Prominent', path: paths.dashboard.ls7.surfaces.appBar.prominent },
                      { title: 'Bottom App Bar', path: paths.dashboard.ls7.surfaces.appBar.bottomAppBar },
                      { title: 'Hide App Bar', path: paths.dashboard.ls7.surfaces.appBar.hideAppBar },
                      { title: 'Elevate App Bar', path: paths.dashboard.ls7.surfaces.appBar.elevateAppBar },
                      { title: 'Back to Top', path: paths.dashboard.ls7.surfaces.appBar.backToTop },
                    ],
                  },
                  {
                    title: 'Card',
                    path: paths.dashboard.ls7.surfaces.card.root,
                    children: [
                      { title: 'Introduction', path: paths.dashboard.ls7.surfaces.card.introduction },
                      { title: 'Outlined Card', path: paths.dashboard.ls7.surfaces.card.outlinedCard },
                      { title: 'Complex Interaction', path: paths.dashboard.ls7.surfaces.card.complexInteraction },
                      { title: 'Media', path: paths.dashboard.ls7.surfaces.card.media },
                      { title: 'Primary Action', path: paths.dashboard.ls7.surfaces.card.primaryAction },
                      { title: 'UI Controls', path: paths.dashboard.ls7.surfaces.card.uiControls },
                      { title: 'Active State Styles', path: paths.dashboard.ls7.surfaces.card.activeStateStyles },
                    ],
                  },
                  {
                    title: 'Paper',
                    path: paths.dashboard.ls7.surfaces.paper.root,
                    children: [
                      { title: 'Introduction', path: paths.dashboard.ls7.surfaces.paper.introduction },
                      { title: 'Elevation', path: paths.dashboard.ls7.surfaces.paper.elevation },
                      { title: 'Variants', path: paths.dashboard.ls7.surfaces.paper.variants },
                      { title: 'Corners', path: paths.dashboard.ls7.surfaces.paper.corners },
                    ],
                  },
                ],
              },
              {
                title: 'Navigation', path: paths.dashboard.ls7.navigation.root,
                children: [
                  {
                    title: 'Bottom Navigation',
                    path: paths.dashboard.ls7.navigation.bottomNavigation.root,
                    children: [
                      { title: 'Bottom Navigation', path: paths.dashboard.ls7.navigation.bottomNavigation.bottomNavigation },
                      { title: 'Bottom Navigation with No Label', path: paths.dashboard.ls7.navigation.bottomNavigation.bottomNavigationWithNoLabel },
                      { title: 'Fixed Positioning', path: paths.dashboard.ls7.navigation.bottomNavigation.fixedPositioning },
                    ],
                  },
                  {
                    title: 'Breadcrumbs',
                    path: paths.dashboard.ls7.navigation.breadcrumbs.root,
                    children: [
                      { title: 'Basic Breadcrumbs', path: paths.dashboard.ls7.navigation.breadcrumbs.basicBreadcrumbs },
                      { title: 'Active Last Breadcrumb', path: paths.dashboard.ls7.navigation.breadcrumbs.activeLastBreadcrumb },
                      { title: 'Custom Separator', path: paths.dashboard.ls7.navigation.breadcrumbs.customSeparator },
                      { title: 'Breadcrumbs with Icons', path: paths.dashboard.ls7.navigation.breadcrumbs.breadcrumbsWithIcons },
                      { title: 'Collapsed Breadcrumbs', path: paths.dashboard.ls7.navigation.breadcrumbs.collapsedBreadcrumbs },
                      { title: 'Condensed with Menu', path: paths.dashboard.ls7.navigation.breadcrumbs.condensedWithMenu },
                      { title: 'Customization', path: paths.dashboard.ls7.navigation.breadcrumbs.customization },
                    ],
                  },
                  {
                    title: 'Drawer',
                    path: paths.dashboard.ls7.navigation.drawer.root,
                    children: [
                      { title: 'Temporary Drawer', path: paths.dashboard.ls7.navigation.drawer.temporaryDrawer },
                      { title: 'Anchor', path: paths.dashboard.ls7.navigation.drawer.anchor },
                      { title: 'Swipeable', path: paths.dashboard.ls7.navigation.drawer.swipeable },
                      { title: 'Swipeable Edge', path: paths.dashboard.ls7.navigation.drawer.swipeableEdge },
                      { title: 'Responsive Drawer', path: paths.dashboard.ls7.navigation.drawer.responsiveDrawer },
                      { title: 'Persistent Drawer', path: paths.dashboard.ls7.navigation.drawer.persistentDrawer },
                      { title: 'Mini Variant Drawer', path: paths.dashboard.ls7.navigation.drawer.miniVariantDrawer },
                      { title: 'Temporary Drawer', path: paths.dashboard.ls7.navigation.drawer.temporaryDrawer },
                      { title: 'Permanent Drawer', path: paths.dashboard.ls7.navigation.drawer.permanentDrawer },
                    ],
                  },
                  {
                    title: 'Link',
                    path: paths.dashboard.ls7.navigation.link.root,
                    children: [
                      { title: 'Basic Links', path: paths.dashboard.ls7.navigation.link.basicLinks },
                      { title: 'Underline', path: paths.dashboard.ls7.navigation.link.underline },
                    ],
                  },
                  {
                    title: 'Menu',
                    path: paths.dashboard.ls7.navigation.menu.root,
                    children: [
                      { title: 'Basic Menu', path: paths.dashboard.ls7.navigation.menu.basicMenu },
                      { title: 'Icon Menu', path: paths.dashboard.ls7.navigation.menu.iconMenu },
                      { title: 'Dense Menu', path: paths.dashboard.ls7.navigation.menu.denseMenu },
                      { title: 'Selected Menu', path: paths.dashboard.ls7.navigation.menu.selectedMenu },
                      { title: 'Positioned Menu', path: paths.dashboard.ls7.navigation.menu.positionedMenu },
                      { title: 'Composition with Menu List', path: paths.dashboard.ls7.navigation.menu.compositionWithMenuList },
                      { title: 'Account Menu', path: paths.dashboard.ls7.navigation.menu.accountMenu },
                      { title: 'Customization', path: paths.dashboard.ls7.navigation.menu.customization },
                      { title: 'Max Height Menu', path: paths.dashboard.ls7.navigation.menu.maxHeightMenu },
                      { title: 'Limitations', path: paths.dashboard.ls7.navigation.menu.limitations },
                      { title: 'Context Menu', path: paths.dashboard.ls7.navigation.menu.contextMenu },
                      { title: 'Grouped Menu', path: paths.dashboard.ls7.navigation.menu.groupedMenu },
                    ],
                  },
                  {
                    title: 'Pagination',
                    path: paths.dashboard.ls7.navigation.pagination.root,
                    children: [
                      { title: 'Basic Pagination', path: paths.dashboard.ls7.navigation.pagination.basicPagination },
                      { title: 'Outlined Pagination', path: paths.dashboard.ls7.navigation.pagination.outlinedPagination },
                      { title: 'Rounded Pagination', path: paths.dashboard.ls7.navigation.pagination.roundedPagination },
                      { title: 'Pagination Size', path: paths.dashboard.ls7.navigation.pagination.paginationSize },
                      { title: 'Buttons', path: paths.dashboard.ls7.navigation.pagination.buttons },
                      { title: 'Custom Icons', path: paths.dashboard.ls7.navigation.pagination.customIcons },
                      { title: 'Pagination Ranges', path: paths.dashboard.ls7.navigation.pagination.paginationRanges },
                      { title: 'Table Pagination', path: paths.dashboard.ls7.navigation.pagination.tablePagination },
                    ],
                  },
                  {
                    title: 'Speed Dial',
                    path: paths.dashboard.ls7.navigation.speedDial.root,
                    children: [
                      { title: 'Basic Speed Dial', path: paths.dashboard.ls7.navigation.speedDial.basicSpeedDial },
                      { title: 'Custom Close Icon', path: paths.dashboard.ls7.navigation.speedDial.customCloseIcon },
                      { title: 'Persistent Action Tooltips', path: paths.dashboard.ls7.navigation.speedDial.persistentActionTooltips },
                    ],
                  },
                  {
                    title: 'Stepper',
                    path: paths.dashboard.ls7.navigation.stepper.root,
                    children: [
                      { title: 'Linear', path: paths.dashboard.ls7.navigation.stepper.linear },
                      { title: 'Non-Linear', path: paths.dashboard.ls7.navigation.stepper.nonLinear },
                      { title: 'Alternative Label', path: paths.dashboard.ls7.navigation.stepper.alternativeLabel },
                      { title: 'Error Step', path: paths.dashboard.ls7.navigation.stepper.errorStep },
                      { title: 'Vertical Stepper', path: paths.dashboard.ls7.navigation.stepper.verticalStepper },
                      { title: 'Text', path: paths.dashboard.ls7.navigation.stepper.text },
                      { title: 'Dots', path: paths.dashboard.ls7.navigation.stepper.dots },
                      { title: 'Progress', path: paths.dashboard.ls7.navigation.stepper.progress },
                    ],
                  },
                  {
                    title: 'Tabs',
                    path: paths.dashboard.ls7.navigation.tabs.root,
                    children: [
                      { title: 'Introduction', path: paths.dashboard.ls7.navigation.tabs.introduction },
                      { title: 'Wrapped Labels', path: paths.dashboard.ls7.navigation.tabs.wrappedLabels },
                      { title: 'Colored Tab', path: paths.dashboard.ls7.navigation.tabs.coloredTab },
                      { title: 'Disabled Tab', path: paths.dashboard.ls7.navigation.tabs.disabledTab },
                      { title: 'Full Width', path: paths.dashboard.ls7.navigation.tabs.fullWidth },
                      { title: 'Centered', path: paths.dashboard.ls7.navigation.tabs.centered },
                      { title: 'Automatic Scroll Buttons', path: paths.dashboard.ls7.navigation.tabs.automaticScrollButtons },
                      { title: 'Forced Scroll Buttons', path: paths.dashboard.ls7.navigation.tabs.forcedScrollButtons },
                      { title: 'Prevent Scroll Buttons', path: paths.dashboard.ls7.navigation.tabs.preventScrollButtons },
                      { title: 'Vertical Tabs', path: paths.dashboard.ls7.navigation.tabs.verticalTabs },
                      { title: 'Nav Tabs', path: paths.dashboard.ls7.navigation.tabs.navTabs },
                      { title: 'Icon Tabs', path: paths.dashboard.ls7.navigation.tabs.iconTabs },
                      { title: 'Icon Position', path: paths.dashboard.ls7.navigation.tabs.iconPosition },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },

      {
        title: 'Quiz 3, 4, 5',
        path: paths.dashboard.q345.root,
        icon: ICONS.menuItem,
        children: [
          { title: 'Scenario 1 - Coffee & Pastry Suggestion', path: paths.dashboard.q345.scenario1 },
          { title: 'Scenario 2 - Inventory Dashboard', path: paths.dashboard.q345.scenario2 },
          { title: 'Scenario 3 - Product Gallery', path: paths.dashboard.q345.scenario3 },
        ],
      },
    ],
  },
];