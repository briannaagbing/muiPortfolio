import { lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { CONFIG } from 'src/config-global';
import { DashboardLayout } from 'src/layouts/dashboard';

import { LoadingScreen } from 'src/components/loading-screen';

import { AuthGuard } from 'src/auth/guard';

// ----------------------------------------------------------------------

// Overview
const IndexPage = lazy(() => import('src/pages/dashboard'));
const OverviewEcommercePage = lazy(() => import('src/pages/dashboard/ecommerce'));
const OverviewAnalyticsPage = lazy(() => import('src/pages/dashboard/analytics'));
const OverviewBankingPage = lazy(() => import('src/pages/dashboard/banking'));
const OverviewBookingPage = lazy(() => import('src/pages/dashboard/booking'));
const OverviewFilePage = lazy(() => import('src/pages/dashboard/file'));
const OverviewCoursePage = lazy(() => import('src/pages/dashboard/course'));
// Product
const ProductDetailsPage = lazy(() => import('src/pages/dashboard/product/details'));
const ProductListPage = lazy(() => import('src/pages/dashboard/product/list'));
const ProductCreatePage = lazy(() => import('src/pages/dashboard/product/new'));
const ProductEditPage = lazy(() => import('src/pages/dashboard/product/edit'));
// Order
const OrderListPage = lazy(() => import('src/pages/dashboard/order/list'));
const OrderDetailsPage = lazy(() => import('src/pages/dashboard/order/details'));
// Invoice
const InvoiceListPage = lazy(() => import('src/pages/dashboard/invoice/list'));
const InvoiceDetailsPage = lazy(() => import('src/pages/dashboard/invoice/details'));
const InvoiceCreatePage = lazy(() => import('src/pages/dashboard/invoice/new'));
const InvoiceEditPage = lazy(() => import('src/pages/dashboard/invoice/edit'));
// User
const UserProfilePage = lazy(() => import('src/pages/dashboard/user/profile'));
const UserCardsPage = lazy(() => import('src/pages/dashboard/user/cards'));
const UserListPage = lazy(() => import('src/pages/dashboard/user/list'));
const UserAccountPage = lazy(() => import('src/pages/dashboard/user/account'));
const UserCreatePage = lazy(() => import('src/pages/dashboard/user/new'));
const UserEditPage = lazy(() => import('src/pages/dashboard/user/edit'));
// Blog
const BlogPostsPage = lazy(() => import('src/pages/dashboard/post/list'));
const BlogPostPage = lazy(() => import('src/pages/dashboard/post/details'));
const BlogNewPostPage = lazy(() => import('src/pages/dashboard/post/new'));
const BlogEditPostPage = lazy(() => import('src/pages/dashboard/post/edit'));
// Job
const JobDetailsPage = lazy(() => import('src/pages/dashboard/job/details'));
const JobListPage = lazy(() => import('src/pages/dashboard/job/list'));
const JobCreatePage = lazy(() => import('src/pages/dashboard/job/new'));
const JobEditPage = lazy(() => import('src/pages/dashboard/job/edit'));
// Tour
const TourDetailsPage = lazy(() => import('src/pages/dashboard/tour/details'));
const TourListPage = lazy(() => import('src/pages/dashboard/tour/list'));
const TourCreatePage = lazy(() => import('src/pages/dashboard/tour/new'));
const TourEditPage = lazy(() => import('src/pages/dashboard/tour/edit'));
// File manager
const FileManagerPage = lazy(() => import('src/pages/dashboard/file-manager'));
// App
const ChatPage = lazy(() => import('src/pages/dashboard/chat'));
const MailPage = lazy(() => import('src/pages/dashboard/mail'));
const CalendarPage = lazy(() => import('src/pages/dashboard/calendar'));
const KanbanPage = lazy(() => import('src/pages/dashboard/kanban'));
// Test render page by role
const PermissionDeniedPage = lazy(() => import('src/pages/dashboard/permission'));
// Blank page
const ParamsPage = lazy(() => import('src/pages/dashboard/params'));
const BlankPage = lazy(() => import('src/pages/dashboard/blank'));

// Brianna custom pages
const Quiz1Page = lazy(() => import('src/pages/iteawd/quiz1'));
const Ls1Page = lazy(() => import('src/pages/iteawd/midtermLabs/ls1/ls1'));
const Ls2Page = lazy(() => import('src/pages/iteawd/midtermLabs/ls2/ls2'));
const Ls3Page = lazy(() => import('src/pages/iteawd/midtermLabs/ls3/ls3'));
const Ls4Page = lazy(() => import('src/pages/iteawd/midtermLabs/ls4/ls4'));
const LqPage = lazy(() => import('src/pages/iteawd/midtermLabs/lq/lq'));

// LS6 CUSTOM PAGES
// INPUTS
// Autocomplete
const AutocompleteComboBox = lazy(() => import('src/pages/iteawd/finalsLabs/ls6/inputs/autocomplete/comboBox'));
const AutocompleteGrouped = lazy(() => import('src/pages/iteawd/finalsLabs/ls6/inputs/autocomplete/grouped'));
const AutocompleteDisabled = lazy(() => import('src/pages/iteawd/finalsLabs/ls6/inputs/autocomplete/disabledOptions'));
const AutocompleteMultiple = lazy(() => import('src/pages/iteawd/finalsLabs/ls6/inputs/autocomplete/multipleValues'));
const AutocompleteFixed = lazy(() => import('src/pages/iteawd/finalsLabs/ls6/inputs/autocomplete/fixedOptions'));
const AutocompleteCheckboxes = lazy(() => import('src/pages/iteawd/finalsLabs/ls6/inputs/autocomplete/checkboxes'));
const AutocompleteLimitTags = lazy(() => import('src/pages/iteawd/finalsLabs/ls6/inputs/autocomplete/limitTags'));
const AutocompleteSizes = lazy(() => import('src/pages/iteawd/finalsLabs/ls6/inputs/autocomplete/sizes'));
// Button
const ButtonBasic = lazy(() => import('src/pages/iteawd/finalsLabs/ls6/inputs/button/basic'));
const ButtonText = lazy(() => import('src/pages/iteawd/finalsLabs/ls6/inputs/button/text'));
const ButtonContained = lazy(() => import('src/pages/iteawd/finalsLabs/ls6/inputs/button/contained'));
const ButtonOutlined = lazy(() => import('src/pages/iteawd/finalsLabs/ls6/inputs/button/outlined'));
const ButtonColor = lazy(() => import('src/pages/iteawd/finalsLabs/ls6/inputs/button/color'));
const ButtonSizes = lazy(() => import('src/pages/iteawd/finalsLabs/ls6/inputs/button/sizes'));
const ButtonIconsAndLabel = lazy(() => import('src/pages/iteawd/finalsLabs/ls6/inputs/button/iconsAndLabel'));
const ButtonIconButton = lazy(() => import('src/pages/iteawd/finalsLabs/ls6/inputs/button/iconButton'));
const ButtonLoading = lazy(() => import('src/pages/iteawd/finalsLabs/ls6/inputs/button/loading'));
const ButtonBadge = lazy(() => import('src/pages/iteawd/finalsLabs/ls6/inputs/button/badge'));
// ---- Button Group ----
const BasicButtonGroup = lazy(() => import('src/pages/iteawd/finalsLabs/ls6/inputs/buttonGroup/basicButtonGroup'));
const ButtonVariants = lazy(() => import('src/pages/iteawd/finalsLabs/ls6/inputs/buttonGroup/buttonVariants'));
const SizesAndColors = lazy(() => import('src/pages/iteawd/finalsLabs/ls6/inputs/buttonGroup/sizesAndColors'));
const VerticalGroup = lazy(() => import('src/pages/iteawd/finalsLabs/ls6/inputs/buttonGroup/verticalGroup'));
const SplitButton = lazy(() => import('src/pages/iteawd/finalsLabs/ls6/inputs/buttonGroup/splitButton'));
// ---- Checkbox ----
const BasicCheckBoxes = lazy(() => import('src/pages/iteawd/finalsLabs/ls6/inputs/checkbox/basicCheckBoxes'));
const CheckboxLabel = lazy(() => import('src/pages/iteawd/finalsLabs/ls6/inputs/checkbox/label'));
const CheckboxSize = lazy(() => import('src/pages/iteawd/finalsLabs/ls6/inputs/checkbox/size'));
const CheckboxColor = lazy(() => import('src/pages/iteawd/finalsLabs/ls6/inputs/checkbox/color'));
const CheckboxIcon = lazy(() => import('src/pages/iteawd/finalsLabs/ls6/inputs/checkbox/icon'));
const CheckboxControlled = lazy(() => import('src/pages/iteawd/finalsLabs/ls6/inputs/checkbox/controlled'));
const CheckboxIndeterminate = lazy(() => import('src/pages/iteawd/finalsLabs/ls6/inputs/checkbox/indeterminate'));
const CheckboxFormGroup = lazy(() => import('src/pages/iteawd/finalsLabs/ls6/inputs/checkbox/formGroup'));
const CheckboxLabelPlacement = lazy(() => import('src/pages/iteawd/finalsLabs/ls6/inputs/checkbox/labelPlacement'));
// ---- Floating Action Button ----
const FloatingActionButtonBasic = lazy(() => import('src/pages/iteawd/finalsLabs/ls6/inputs/floatingActionButton/basicFab'));
const FloatingActionButtonSize = lazy(() => import('src/pages/iteawd/finalsLabs/ls6/inputs/floatingActionButton/size'));
const FloatingActionButtonAnimation = lazy(() => import('src/pages/iteawd/finalsLabs/ls6/inputs/floatingActionButton/animation'));
// ---- Radio Group ----
const RadioGroup = lazy(() => import('src/pages/iteawd/finalsLabs/ls6/inputs/radioGroup/radioGroup'));
const RadioDirection = lazy(() => import('src/pages/iteawd/finalsLabs/ls6/inputs/radioGroup/direction'));
const RadioControlled = lazy(() => import('src/pages/iteawd/finalsLabs/ls6/inputs/radioGroup/controlled'));
const RadioSize = lazy(() => import('src/pages/iteawd/finalsLabs/ls6/inputs/radioGroup/size'));
const RadioColor = lazy(() => import('src/pages/iteawd/finalsLabs/ls6/inputs/radioGroup/color'));
const RadioLabelPlacement = lazy(() => import('src/pages/iteawd/finalsLabs/ls6/inputs/radioGroup/labelPlacement'));
const RadioShowError = lazy(() => import('src/pages/iteawd/finalsLabs/ls6/inputs/radioGroup/showError'));
// ---- Rating ----
const RatingBasicRating = lazy(() => import('src/pages/iteawd/finalsLabs/ls6/inputs/rating/basicRating'));
const RatingPrecision = lazy(() => import('src/pages/iteawd/finalsLabs/ls6/inputs/rating/ratingPrecision'));
const RatingHoverFeedback = lazy(() => import('src/pages/iteawd/finalsLabs/ls6/inputs/rating/hoverFeedback'));
const RatingSizes = lazy(() => import('src/pages/iteawd/finalsLabs/ls6/inputs/rating/sizes'));
const RatingCustomization = lazy(() => import('src/pages/iteawd/finalsLabs/ls6/inputs/rating/customization'));
const RatingRadioGroup = lazy(() => import('src/pages/iteawd/finalsLabs/ls6/inputs/rating/radioGroup'));
// ---- Select ----
const SelectBasicSelect = lazy(() => import('src/pages/iteawd/finalsLabs/ls6/inputs/select/basicSelect'));
const SelectFilledAndStandVar = lazy(() => import('src/pages/iteawd/finalsLabs/ls6/inputs/select/filledAndStandVar'));
const SelectLabelsAndHelperText = lazy(() => import('src/pages/iteawd/finalsLabs/ls6/inputs/select/labelsAndHelperText'));
const SelectAutowidth = lazy(() => import('src/pages/iteawd/finalsLabs/ls6/inputs/select/autowidth'));
const SelectSmallSize = lazy(() => import('src/pages/iteawd/finalsLabs/ls6/inputs/select/smallSize'));
// ---- Slider ----
const SliderContinuousSlider = lazy(() => import('src/pages/iteawd/finalsLabs/ls6/inputs/sliders/continuousSliders'));
const SliderSizes = lazy(() => import('src/pages/iteawd/finalsLabs/ls6/inputs/sliders/sizes'));
const SliderDiscreteSlider = lazy(() => import('src/pages/iteawd/finalsLabs/ls6/inputs/sliders/discreteSliders'));
const SliderSmallSteps = lazy(() => import('src/pages/iteawd/finalsLabs/ls6/inputs/sliders/smallSteps'));
const SliderCustomMarks = lazy(() => import('src/pages/iteawd/finalsLabs/ls6/inputs/sliders/customMarks'));
const SliderRestrictedValues = lazy(() => import('src/pages/iteawd/finalsLabs/ls6/inputs/sliders/restrictedValues'));
const SliderLabelAlwaysVisible = lazy(() => import('src/pages/iteawd/finalsLabs/ls6/inputs/sliders/labelAlwaysVisible'));
const SliderRangeSlider = lazy(() => import('src/pages/iteawd/finalsLabs/ls6/inputs/sliders/rangeSlider'));
const SliderSliderWithInputField = lazy(() => import('src/pages/iteawd/finalsLabs/ls6/inputs/sliders/sliderWithInputField'));
const SliderColor = lazy(() => import('src/pages/iteawd/finalsLabs/ls6/inputs/sliders/color'));
const SliderMusicPlayer = lazy(() => import('src/pages/iteawd/finalsLabs/ls6/inputs/sliders/musicPlayer'));
const SliderVerticalSlider = lazy(() => import('src/pages/iteawd/finalsLabs/ls6/inputs/sliders/verticalSliders'));
const SliderMarksPlacement = lazy(() => import('src/pages/iteawd/finalsLabs/ls6/inputs/sliders/marksPlacement'));
const SliderNonLinearScale = lazy(() => import('src/pages/iteawd/finalsLabs/ls6/inputs/sliders/nonLinearScale'));
// ---- Switch ----
const SwitchBasicSwitches = lazy(() => import('src/pages/iteawd/finalsLabs/ls6/inputs/switch/basicSwitches'));
const SwitchLabel = lazy(() => import('src/pages/iteawd/finalsLabs/ls6/inputs/switch/label'));
const SwitchSize = lazy(() => import('src/pages/iteawd/finalsLabs/ls6/inputs/switch/size'));
const SwitchColor = lazy(() => import('src/pages/iteawd/finalsLabs/ls6/inputs/switch/color'));
const SwitchControlled = lazy(() => import('src/pages/iteawd/finalsLabs/ls6/inputs/switch/controlled'));
const SwitchSwitchesFormGroup = lazy(() => import('src/pages/iteawd/finalsLabs/ls6/inputs/switch/switchesWithFormGroup'));
// ---- Text Field ----
const TextFieldBasicTextField = lazy(() => import('src/pages/iteawd/finalsLabs/ls6/inputs/textField/basicTextField'));
const TextFieldFormProps = lazy(() => import('src/pages/iteawd/finalsLabs/ls6/inputs/textField/formProps'));
const TextFieldValidation = lazy(() => import('src/pages/iteawd/finalsLabs/ls6/inputs/textField/validation'));
const TextFieldMultiline = lazy(() => import('src/pages/iteawd/finalsLabs/ls6/inputs/textField/multiline'));
const TextFieldSelect = lazy(() => import('src/pages/iteawd/finalsLabs/ls6/inputs/textField/select'));
const TextFieldIcons = lazy(() => import('src/pages/iteawd/finalsLabs/ls6/inputs/textField/icons'));
const TextFieldInputAdornments = lazy(() => import('src/pages/iteawd/finalsLabs/ls6/inputs/textField/inputAdornments'));
const TextFieldCustomizingAdornments = lazy(() => import('src/pages/iteawd/finalsLabs/ls6/inputs/textField/customizingAdornments'));
const TextFieldSizes = lazy(() => import('src/pages/iteawd/finalsLabs/ls6/inputs/textField/sizes'));
const TextFieldFullWidth = lazy(() => import('src/pages/iteawd/finalsLabs/ls6/inputs/textField/fullWidth'));
const TextFieldColor = lazy(() => import('src/pages/iteawd/finalsLabs/ls6/inputs/textField/color'));
// ---- Transfer List ----
const TransferListBasicTransferList = lazy(() => import('src/pages/iteawd/finalsLabs/ls6/inputs/transferList/basicTransferList'));
const TransferListEnhancedTransferList = lazy(() => import('src/pages/iteawd/finalsLabs/ls6/inputs/transferList/enhancedTransferList'));
// ---- Toggle Button ----
const ToggleButtonExclusiveSelection = lazy(() => import('src/pages/iteawd/finalsLabs/ls6/inputs/toggleButton/exclusiveSelection'));
const ToggleButtonMultipleSelection = lazy(() => import('src/pages/iteawd/finalsLabs/ls6/inputs/toggleButton/multipleSelection'));
const ToggleButtonSize = lazy(() => import('src/pages/iteawd/finalsLabs/ls6/inputs/toggleButton/size'));
const ToggleButtonColor = lazy(() => import('src/pages/iteawd/finalsLabs/ls6/inputs/toggleButton/color'));
const ToggleButtonVerticalButtons = lazy(() => import('src/pages/iteawd/finalsLabs/ls6/inputs/toggleButton/verticalButtons'));
const ToggleButtonStandaloneToggleButton = lazy(() => import('src/pages/iteawd/finalsLabs/ls6/inputs/toggleButton/standaloneToggleButton'));
const ToggleButtonHorizontalSpacing = lazy(() => import('src/pages/iteawd/finalsLabs/ls6/inputs/toggleButton/horizontalSpacing'));
const ToggleButtonVerticalSpacing = lazy(() => import('src/pages/iteawd/finalsLabs/ls6/inputs/toggleButton/verticalSpacing'));
// DATA DISPLAYS
// ---- Avatar ----
const AvatarImageAvatars = lazy(() => import('src/pages/iteawd/finalsLabs/ls6/dataDisplays/avatar/imageAvatars'));
const AvatarLetterAvatars = lazy(() => import('src/pages/iteawd/finalsLabs/ls6/dataDisplays/avatar/letterAvatars'));
const AvatarSizes = lazy(() => import('src/pages/iteawd/finalsLabs/ls6/dataDisplays/avatar/sizes'));
const AvatarIconAvatars = lazy(() => import('src/pages/iteawd/finalsLabs/ls6/dataDisplays/avatar/iconAvatars'));
const AvatarVariants = lazy(() => import('src/pages/iteawd/finalsLabs/ls6/dataDisplays/avatar/variants'));
const AvatarFallbacks = lazy(() => import('src/pages/iteawd/finalsLabs/ls6/dataDisplays/avatar/fallbacks'));
const AvatarGrouped = lazy(() => import('src/pages/iteawd/finalsLabs/ls6/dataDisplays/avatar/grouped'));
const AvatarTotalAvatars = lazy(() => import('src/pages/iteawd/finalsLabs/ls6/dataDisplays/avatar/totalAvatars'));
const AvatarSpacing = lazy(() => import('src/pages/iteawd/finalsLabs/ls6/dataDisplays/avatar/spacing'));
const AvatarWithBadge = lazy(() => import('src/pages/iteawd/finalsLabs/ls6/dataDisplays/avatar/withBadge'));
// ---- Badge ----
const BadgeBasicBadge = lazy(() => import('src/pages/iteawd/finalsLabs/ls6/dataDisplays/badge/basicBadge'));
const BadgeColor = lazy(() => import('src/pages/iteawd/finalsLabs/ls6/dataDisplays/badge/color'));
const BadgeBadgeVisibility = lazy(() => import('src/pages/iteawd/finalsLabs/ls6/dataDisplays/badge/badgeVisibility'));
const BadgeMaximumValue = lazy(() => import('src/pages/iteawd/finalsLabs/ls6/dataDisplays/badge/maximumValue'));
const BadgeDotBadge = lazy(() => import('src/pages/iteawd/finalsLabs/ls6/dataDisplays/badge/dotBadge'));
const BadgeBadgeAlignment = lazy(() => import('src/pages/iteawd/finalsLabs/ls6/dataDisplays/badge/badgeAlignment'));
// ---- Chip ----
const ChipBasicChip = lazy(() => import('src/pages/iteawd/finalsLabs/ls6/dataDisplays/chip/basicChip'));
const ChipClickable = lazy(() => import('src/pages/iteawd/finalsLabs/ls6/dataDisplays/chip/clickable'));
const ChipDeletable = lazy(() => import('src/pages/iteawd/finalsLabs/ls6/dataDisplays/chip/deletable'));
const ChipCustomDeleteIcon = lazy(() => import('src/pages/iteawd/finalsLabs/ls6/dataDisplays/chip/customDeleteIcon'));
const ChipIcon = lazy(() => import('src/pages/iteawd/finalsLabs/ls6/dataDisplays/chip/iconChip'));
const ChipAvatarChip = lazy(() => import('src/pages/iteawd/finalsLabs/ls6/dataDisplays/chip/avatarChip'));
const ChipIconChip = lazy(() => import('src/pages/iteawd/finalsLabs/ls6/dataDisplays/chip/iconChip'));
const ChipColorChip = lazy(() => import('src/pages/iteawd/finalsLabs/ls6/dataDisplays/chip/colorChip'));
const ChipSizesChip = lazy(() => import('src/pages/iteawd/finalsLabs/ls6/dataDisplays/chip/sizesChip'));
const ChipMultilineChip = lazy(() => import('src/pages/iteawd/finalsLabs/ls6/dataDisplays/chip/multilineChip'));
const ChipChipArray = lazy(() => import('src/pages/iteawd/finalsLabs/ls6/dataDisplays/chip/chipArray'));
// ---- Divider ----
const DividerIntroduction = lazy(() => import('src/pages/iteawd/finalsLabs/ls6/dataDisplays/divider/introduction'));
const DividerVariants = lazy(() => import('src/pages/iteawd/finalsLabs/ls6/dataDisplays/divider/variants'));
const DividerOrientation = lazy(() => import('src/pages/iteawd/finalsLabs/ls6/dataDisplays/divider/orientation'));
const DividerFlexItem = lazy(() => import('src/pages/iteawd/finalsLabs/ls6/dataDisplays/divider/flexItem'));
const DividerWithChildren = lazy(() => import('src/pages/iteawd/finalsLabs/ls6/dataDisplays/divider/withChildren'));
const DividerUseWithAList = lazy(() => import('src/pages/iteawd/finalsLabs/ls6/dataDisplays/divider/useWithAList'));
const DividerIconGroup = lazy(() => import('src/pages/iteawd/finalsLabs/ls6/dataDisplays/divider/iconGroup'));
// ---- Table ----
const TableBasicTable = lazy(() => import('src/pages/iteawd/finalsLabs/ls6/dataDisplays/table/basicTable'));
const TableDataTable = lazy(() => import('src/pages/iteawd/finalsLabs/ls6/dataDisplays/table/dataTable'));
const TableDenseTable = lazy(() => import('src/pages/iteawd/finalsLabs/ls6/dataDisplays/table/denseTable'));
// ---- Tooltip ----
const TooltipBasicTooltip = lazy(() => import('src/pages/iteawd/finalsLabs/ls6/dataDisplays/tooltip/basicTooltip'));
const TooltipPositionedTooltips = lazy(() => import('src/pages/iteawd/finalsLabs/ls6/dataDisplays/tooltip/positionedTooltips'));
const TooltipArrowTooltips = lazy(() => import('src/pages/iteawd/finalsLabs/ls6/dataDisplays/tooltip/arrowTooltips'));
const TooltipDistanceFromAnchor = lazy(() => import('src/pages/iteawd/finalsLabs/ls6/dataDisplays/tooltip/distanceFromAnchor'));
const TooltipTriggers = lazy(() => import('src/pages/iteawd/finalsLabs/ls6/dataDisplays/tooltip/triggers'));
const TooltipVariableWidth = lazy(() => import('src/pages/iteawd/finalsLabs/ls6/dataDisplays/tooltip/variableWidth'));
const TooltipDisabledElements = lazy(() => import('src/pages/iteawd/finalsLabs/ls6/dataDisplays/tooltip/disabledElements'));
const TooltipTransitions = lazy(() => import('src/pages/iteawd/finalsLabs/ls6/dataDisplays/tooltip/transitions'));
const TooltipFollowCursor = lazy(() => import('src/pages/iteawd/finalsLabs/ls6/dataDisplays/tooltip/followCursor'));
const TooltipVirtualElement = lazy(() => import('src/pages/iteawd/finalsLabs/ls6/dataDisplays/tooltip/virtualElement'));
const TooltipShowingAndHiding = lazy(() => import('src/pages/iteawd/finalsLabs/ls6/dataDisplays/tooltip/showingAndHiding'));
// ---- Typography ----
const TypographyUsage = lazy(() => import('src/pages/iteawd/finalsLabs/ls6/dataDisplays/typography/usage'));

// LS7 CUSTOM PAGES
// FEEDBACK
// Alert
const AlertIntroduction = lazy(() => import('src/pages/iteawd/finalsLabs/ls7/feedback/alert/introduction'));
const AlertSeverity = lazy(() => import('src/pages/iteawd/finalsLabs/ls7/feedback/alert/severity'));
const AlertVariants = lazy(() => import('src/pages/iteawd/finalsLabs/ls7/feedback/alert/variants'));
const AlertColor = lazy(() => import('src/pages/iteawd/finalsLabs/ls7/feedback/alert/color'));
const AlertActions = lazy(() => import('src/pages/iteawd/finalsLabs/ls7/feedback/alert/actions'));
const AlertIcons = lazy(() => import('src/pages/iteawd/finalsLabs/ls7/feedback/alert/icons'));
const AlertTransitions = lazy(() => import('src/pages/iteawd/finalsLabs/ls7/feedback/alert/transitions'));
// Backdrop
const BackdropExample = lazy(() => import('src/pages/iteawd/finalsLabs/ls7/feedback/backdrop/example'));
// Dialog
const DialogIntroduction = lazy(() => import('src/pages/iteawd/finalsLabs/ls7/feedback/dialog/introduction'));
const DialogAlerts = lazy(() => import('src/pages/iteawd/finalsLabs/ls7/feedback/dialog/alerts'));
const DialogTransitions = lazy(() => import('src/pages/iteawd/finalsLabs/ls7/feedback/dialog/transitions'));
const DialogFormDialogs = lazy(() => import('src/pages/iteawd/finalsLabs/ls7/feedback/dialog/formDialogs'));
const DialogCustomization = lazy(() => import('src/pages/iteawd/finalsLabs/ls7/feedback/dialog/customization'));
const DialogFullScreenDialogs = lazy(() => import('src/pages/iteawd/finalsLabs/ls7/feedback/dialog/fullScreenDialogs'));
const DialogOptionalSizes = lazy(() => import('src/pages/iteawd/finalsLabs/ls7/feedback/dialog/optionalSizes'));
const DialogResponsiveFullScreen = lazy(() => import('src/pages/iteawd/finalsLabs/ls7/feedback/dialog/responsiveFullScreen'));
const DialogConfirmationDialogs = lazy(() => import('src/pages/iteawd/finalsLabs/ls7/feedback/dialog/confirmationDialogs'));
const DialogNonModalDialogs = lazy(() => import('src/pages/iteawd/finalsLabs/ls7/feedback/dialog/nonModalDialogs'));
const DialogDraggableDialog = lazy(() => import('src/pages/iteawd/finalsLabs/ls7/feedback/dialog/draggableDialog'));
const DialogScrollingLongContent = lazy(() => import('src/pages/iteawd/finalsLabs/ls7/feedback/dialog/scrollingLongContent'));
// Progress
const ProgressCircularIndeterminate = lazy(() => import('src/pages/iteawd/finalsLabs/ls7/feedback/progress/circular/circularIndeterminate'));
const ProgressCircularColor = lazy(() => import('src/pages/iteawd/finalsLabs/ls7/feedback/progress/circular/circularColor'));
const ProgressCircularSize = lazy(() => import('src/pages/iteawd/finalsLabs/ls7/feedback/progress/circular/circularSize'));
const ProgressCircularDeterminate = lazy(() => import('src/pages/iteawd/finalsLabs/ls7/feedback/progress/circular/circularDeterminate'));
const ProgressCircularTrack = lazy(() => import('src/pages/iteawd/finalsLabs/ls7/feedback/progress/circular/circularTrack'));
const ProgressInteractiveIntegration = lazy(() => import('src/pages/iteawd/finalsLabs/ls7/feedback/progress/interactiveIntegration'));
const ProgressCircularWithLabel = lazy(() => import('src/pages/iteawd/finalsLabs/ls7/feedback/progress/circularWithLabel'));
const ProgressLinearIndeterminate = lazy(() => import('src/pages/iteawd/finalsLabs/ls7/feedback/progress/linear/linearIndeterminate'));
const ProgressLinearColor = lazy(() => import('src/pages/iteawd/finalsLabs/ls7/feedback/progress/linear/linearColor'));
const ProgressLinearDeterminate = lazy(() => import('src/pages/iteawd/finalsLabs/ls7/feedback/progress/linear/linearDeterminate'));
const ProgressLinearBuffer = lazy(() => import('src/pages/iteawd/finalsLabs/ls7/feedback/progress/linear/linearBuffer'));
const ProgressLinearWithLabel = lazy(() => import('src/pages/iteawd/finalsLabs/ls7/feedback/progress/linear/linearWithLabel'));
const ProgressDelayingAppearance = lazy(() => import('src/pages/iteawd/finalsLabs/ls7/feedback/progress/delayingAppearance'));
// Skeleton
const SkeletonVariants = lazy(() => import('src/pages/iteawd/finalsLabs/ls7/feedback/skeleton/variants'));
const SkeletonAnimations = lazy(() => import('src/pages/iteawd/finalsLabs/ls7/feedback/skeleton/animations'));
const SkeletonPulsateExample = lazy(() => import('src/pages/iteawd/finalsLabs/ls7/feedback/skeleton/pulsateExample'));
const SkeletonWaveExample = lazy(() => import('src/pages/iteawd/finalsLabs/ls7/feedback/skeleton/waveExample'));
const SkeletonInferringDimensions = lazy(() => import('src/pages/iteawd/finalsLabs/ls7/feedback/skeleton/inferringDimensions'));
const SkeletonColor = lazy(() => import('src/pages/iteawd/finalsLabs/ls7/feedback/skeleton/color'));
// Snackbar
const SnackbarIntroduction = lazy(() => import('src/pages/iteawd/finalsLabs/ls7/feedback/snackbar/introduction'));
const SnackbarPosition = lazy(() => import('src/pages/iteawd/finalsLabs/ls7/feedback/snackbar/basics/position'));
const SnackbarContent = lazy(() => import('src/pages/iteawd/finalsLabs/ls7/feedback/snackbar/basics/content'));
const SnackbarAutomaticDismiss = lazy(() => import('src/pages/iteawd/finalsLabs/ls7/feedback/snackbar/basics/automaticDismiss'));
const SnackbarTransitions = lazy(() => import('src/pages/iteawd/finalsLabs/ls7/feedback/snackbar/basics/transitions'));
const SnackbarUseWithAlerts = lazy(() => import('src/pages/iteawd/finalsLabs/ls7/feedback/snackbar/useWithAlerts'));
const SnackbarConsecutiveSnackbars = lazy(() => import('src/pages/iteawd/finalsLabs/ls7/feedback/snackbar/consecutiveSnackbars'));
// SURFACES
// Accordion
const AccordionIntroduction = lazy(() => import('src/pages/iteawd/finalsLabs/ls7/surfaces/accordion/introduction'));
const AccordionExpandIcon = lazy(() => import('src/pages/iteawd/finalsLabs/ls7/surfaces/accordion/expandIcon'));
const AccordionExpandedByDefault = lazy(() => import('src/pages/iteawd/finalsLabs/ls7/surfaces/accordion/expandedByDefault'));
const AccordionTransition = lazy(() => import('src/pages/iteawd/finalsLabs/ls7/surfaces/accordion/transition'));
const AccordionDisabledItem = lazy(() => import('src/pages/iteawd/finalsLabs/ls7/surfaces/accordion/disabledItem'));
// App Bar
const AppBarBasicAppBar = lazy(() => import('src/pages/iteawd/finalsLabs/ls7/surfaces/appBar/basicAppBar'));
const AppBarAppBarWithMenu = lazy(() => import('src/pages/iteawd/finalsLabs/ls7/surfaces/appBar/appBarWithMenu'));
const AppBarWithResponsiveMenu = lazy(() => import('src/pages/iteawd/finalsLabs/ls7/surfaces/appBar/appBarWithResponsiveMenu'));
const AppBarAppBarWithSearchField = lazy(() => import('src/pages/iteawd/finalsLabs/ls7/surfaces/appBar/appBarWithSearchField'));
const AppBarResponsiveAppBarWithDrawer = lazy(() => import('src/pages/iteawd/finalsLabs/ls7/surfaces/appBar/responsiveAppBarWithDrawer'));
const AppBarAppBarWithPrimarySearchField = lazy(() => import('src/pages/iteawd/finalsLabs/ls7/surfaces/appBar/appBarWithPrimarySearchField'));
const AppBarDense = lazy(() => import('src/pages/iteawd/finalsLabs/ls7/surfaces/appBar/dense'));
const AppBarProminent = lazy(() => import('src/pages/iteawd/finalsLabs/ls7/surfaces/appBar/prominent'));
const AppBarBottomAppBar = lazy(() => import('src/pages/iteawd/finalsLabs/ls7/surfaces/appBar/bottomAppBar'));
const AppBarHideAppBar = lazy(() => import('src/pages/iteawd/finalsLabs/ls7/surfaces/appBar/hideAppBar'));
const AppBarElevateAppBar = lazy(() => import('src/pages/iteawd/finalsLabs/ls7/surfaces/appBar/elevateAppBar'));
const AppBarBackToTop = lazy(() => import('src/pages/iteawd/finalsLabs/ls7/surfaces/appBar/backToTop'));
// Card
const CardIntroduction = lazy(() => import('src/pages/iteawd/finalsLabs/ls7/surfaces/card/introduction'));
const CardOutlinedCard = lazy(() => import('src/pages/iteawd/finalsLabs/ls7/surfaces/card/outlinedCard'));
const CardComplexInteraction = lazy(() => import('src/pages/iteawd/finalsLabs/ls7/surfaces/card/complexInteraction'));
const CardMedia = lazy(() => import('src/pages/iteawd/finalsLabs/ls7/surfaces/card/media'));
const CardPrimaryAction = lazy(() => import('src/pages/iteawd/finalsLabs/ls7/surfaces/card/primaryAction'));
const CardUIControls = lazy(() => import('src/pages/iteawd/finalsLabs/ls7/surfaces/card/uiControls'));
const CardActiveStateStyles = lazy(() => import('src/pages/iteawd/finalsLabs/ls7/surfaces/card/activeStateStyles'));
// Paper
const PaperIntroduction = lazy(() => import('src/pages/iteawd/finalsLabs/ls7/surfaces/paper/introduction'));
const PaperElevation = lazy(() => import('src/pages/iteawd/finalsLabs/ls7/surfaces/paper/elevation'));
const PaperVariants = lazy(() => import('src/pages/iteawd/finalsLabs/ls7/surfaces/paper/variants'));
const PaperCorners = lazy(() => import('src/pages/iteawd/finalsLabs/ls7/surfaces/paper/corners'));
// NAVIGATION
// Bottom Navigation
const BottomNavigationBottomNavigation = lazy(() => import('src/pages/iteawd/finalsLabs/ls7/navigation/bottomNavigation/bottomNavigation'));
const BottomNavigationBottomNavigationWithNoLabel = lazy(() => import('src/pages/iteawd/finalsLabs/ls7/navigation/bottomNavigation/bottomNavigationWithNoLabel'));
const BottomNavigationFixedPositioning = lazy(() => import('src/pages/iteawd/finalsLabs/ls7/navigation/bottomNavigation/fixedPositioning'));
// Breadcrumbs
const BreadcrumbsBasicBreadcrumbs = lazy(() => import('src/pages/iteawd/finalsLabs/ls7/navigation/breadcrumbs/basicBreadcrumbs'));
const BreadcrumbsActiveLastBreadcrumb = lazy(() => import('src/pages/iteawd/finalsLabs/ls7/navigation/breadcrumbs/activeLastBreadcrumb'));
const BreadcrumbsCustomSeparator = lazy(() => import('src/pages/iteawd/finalsLabs/ls7/navigation/breadcrumbs/customSeparator'));
const BreadcrumbsWithIcons = lazy(() => import('src/pages/iteawd/finalsLabs/ls7/navigation/breadcrumbs/breadcrumbsWithIcons'));
const BreadcrumbsCollapsedBreadcrumbs = lazy(() => import('src/pages/iteawd/finalsLabs/ls7/navigation/breadcrumbs/collapsedBreadcrumbs'));
const BreadcrumbsCondensedWithMenu = lazy(() => import('src/pages/iteawd/finalsLabs/ls7/navigation/breadcrumbs/condensedWithMenu'));
const BreadcrumbsCustomization = lazy(() => import('src/pages/iteawd/finalsLabs/ls7/navigation/breadcrumbs/customization'));
// Drawer
const DrawerTemporaryDrawer = lazy(() => import('src/pages/iteawd/finalsLabs/ls7/navigation/drawer/temporaryDrawer'));
const DrawerAnchor = lazy(() => import('src/pages/iteawd/finalsLabs/ls7/navigation/drawer/anchor'));
const DrawerSwipeable = lazy(() => import('src/pages/iteawd/finalsLabs/ls7/navigation/drawer/swipeable'));
const DrawerSwipeableEdge = lazy(() => import('src/pages/iteawd/finalsLabs/ls7/navigation/drawer/swipeableEdge'));
const DrawerResponsiveDrawer = lazy(() => import('src/pages/iteawd/finalsLabs/ls7/navigation/drawer/responsiveDrawer'));
const DrawerPersistentDrawer = lazy(() => import('src/pages/iteawd/finalsLabs/ls7/navigation/drawer/persistentDrawer'));
const DrawerMiniVariantDrawer = lazy(() => import('src/pages/iteawd/finalsLabs/ls7/navigation/drawer/miniVariantDrawer'));
const DrawerPermanentDrawer = lazy(() => import('src/pages/iteawd/finalsLabs/ls7/navigation/drawer/permanentDrawer'));
// Link
const LinkBasicLinks = lazy(() => import('src/pages/iteawd/finalsLabs/ls7/navigation/link/basicLinks'));
const LinkUnderline = lazy(() => import('src/pages/iteawd/finalsLabs/ls7/navigation/link/underline'));
// Menu
const MenuBasicMenu = lazy(() => import('src/pages/iteawd/finalsLabs/ls7/navigation/menu/basicMenu'));
const MenuIconMenu = lazy(() => import('src/pages/iteawd/finalsLabs/ls7/navigation/menu/iconMenu'));
const MenuDenseMenu = lazy(() => import('src/pages/iteawd/finalsLabs/ls7/navigation/menu/denseMenu'));
const MenuSelectedMenu = lazy(() => import('src/pages/iteawd/finalsLabs/ls7/navigation/menu/selectedMenu'));
const MenuPositionedMenu = lazy(() => import('src/pages/iteawd/finalsLabs/ls7/navigation/menu/positionedMenu'));
const MenuCompositionWithMenuList = lazy(() => import('src/pages/iteawd/finalsLabs/ls7/navigation/menu/compositionWithMenuList'));
const MenuAccountMenu = lazy(() => import('src/pages/iteawd/finalsLabs/ls7/navigation/menu/accountMenu'));
const MenuCustomization = lazy(() => import('src/pages/iteawd/finalsLabs/ls7/navigation/menu/customization'));
const MenuMaxHeightMenu = lazy(() => import('src/pages/iteawd/finalsLabs/ls7/navigation/menu/maxHeightMenu'));
const MenuLimitations = lazy(() => import('src/pages/iteawd/finalsLabs/ls7/navigation/menu/limitations'));
const MenuContextMenu = lazy(() => import('src/pages/iteawd/finalsLabs/ls7/navigation/menu/contextMenu'));
const MenuGroupedMenu = lazy(() => import('src/pages/iteawd/finalsLabs/ls7/navigation/menu/groupedMenu'));
// Pagination
const PaginationBasicPagination = lazy(() => import('src/pages/iteawd/finalsLabs/ls7/navigation/pagination/basicPagination'));
const PaginationOutlinedPagination = lazy(() => import('src/pages/iteawd/finalsLabs/ls7/navigation/pagination/outlinedPagination'));
const PaginationRoundedPagination = lazy(() => import('src/pages/iteawd/finalsLabs/ls7/navigation/pagination/roundedPagination'));
const PaginationPaginationSize = lazy(() => import('src/pages/iteawd/finalsLabs/ls7/navigation/pagination/paginationSize'));
const PaginationButtons = lazy(() => import('src/pages/iteawd/finalsLabs/ls7/navigation/pagination/buttons'));
const PaginationCustomIcons = lazy(() => import('src/pages/iteawd/finalsLabs/ls7/navigation/pagination/customIcons'));
const PaginationPaginationRanges = lazy(() => import('src/pages/iteawd/finalsLabs/ls7/navigation/pagination/paginationRanges'));
const PaginationTablePagination = lazy(() => import('src/pages/iteawd/finalsLabs/ls7/navigation/pagination/tablePagination'));
// Speed Dial
const SpeedDialBasicSpeedDial = lazy(() => import('src/pages/iteawd/finalsLabs/ls7/navigation/speedDial/basicSpeedDial'));
const SpeedDialCustomCloseIcon = lazy(() => import('src/pages/iteawd/finalsLabs/ls7/navigation/speedDial/customCloseIcon'));
const SpeedDialPersistentActionTooltips = lazy(() => import('src/pages/iteawd/finalsLabs/ls7/navigation/speedDial/persistentActionTooltips'));
// Stepper
const StepperLinear = lazy(() => import('src/pages/iteawd/finalsLabs/ls7/navigation/stepper/linear'));
const StepperNonLinear = lazy(() => import('src/pages/iteawd/finalsLabs/ls7/navigation/stepper/nonLinear'));
const StepperAlternativeLabel = lazy(() => import('src/pages/iteawd/finalsLabs/ls7/navigation/stepper/alternativeLabel'));
const StepperErrorStep = lazy(() => import('src/pages/iteawd/finalsLabs/ls7/navigation/stepper/errorStep'));
const StepperVerticalStepper = lazy(() => import('src/pages/iteawd/finalsLabs/ls7/navigation/stepper/verticalStepper'));
const StepperText = lazy(() => import('src/pages/iteawd/finalsLabs/ls7/navigation/stepper/text'));
const StepperDots = lazy(() => import('src/pages/iteawd/finalsLabs/ls7/navigation/stepper/dots'));
const StepperProgress = lazy(() => import('src/pages/iteawd/finalsLabs/ls7/navigation/stepper/progress'));
// Tabs
const TabsIntroduction = lazy(() => import('src/pages/iteawd/finalsLabs/ls7/navigation/tabs/introduction'));
const TabsWrappedLabels = lazy(() => import('src/pages/iteawd/finalsLabs/ls7/navigation/tabs/wrappedLabels'));
const TabsColoredTab = lazy(() => import('src/pages/iteawd/finalsLabs/ls7/navigation/tabs/coloredTab'));
const TabsDisabledTab = lazy(() => import('src/pages/iteawd/finalsLabs/ls7/navigation/tabs/disabledTab'));
const TabsFullWidth = lazy(() => import('src/pages/iteawd/finalsLabs/ls7/navigation/tabs/fullWidth'));
const TabsCentered = lazy(() => import('src/pages/iteawd/finalsLabs/ls7/navigation/tabs/centered'));
const TabsAutomaticScrollButtons = lazy(() => import('src/pages/iteawd/finalsLabs/ls7/navigation/tabs/automaticScrollButtons'));
const TabsForcedScrollButtons = lazy(() => import('src/pages/iteawd/finalsLabs/ls7/navigation/tabs/forcedScrollButtons'));
const TabsPreventScrollButtons = lazy(() => import('src/pages/iteawd/finalsLabs/ls7/navigation/tabs/preventScrollButtons'));
const TabsVerticalTabs = lazy(() => import('src/pages/iteawd/finalsLabs/ls7/navigation/tabs/verticalTabs'));
const TabsNavTabs = lazy(() => import('src/pages/iteawd/finalsLabs/ls7/navigation/tabs/navTabs'));
const TabsIconTabs = lazy(() => import('src/pages/iteawd/finalsLabs/ls7/navigation/tabs/iconTabs'));
const TabsIconPosition = lazy(() => import('src/pages/iteawd/finalsLabs/ls7/navigation/tabs/iconPosition'));

// Q345 CUSTOM PAGES
const Scenario1 = lazy(() => import('src/pages/iteawd/finalsLabs/q345/scenario1'));
const Scenario2 = lazy(() => import('src/pages/iteawd/finalsLabs/q345/scenario2'));
const Scenario3 = lazy(() => import('src/pages/iteawd/finalsLabs/q345/scenario3'));

// ---- finalExam ----
const FinalExam = lazy(() => import('src/pages/iteawd/finalsLabs/finalExam/finalExam'));
// ----------------------------------------------------------------------

const layoutContent = (
  <DashboardLayout>
    <Suspense fallback={<LoadingScreen />}>
      <Outlet />
    </Suspense>
  </DashboardLayout>
);

export const dashboardRoutes = [
  {
    path: 'dashboard',
    element: CONFIG.auth.skip ? <>{layoutContent}</> : <AuthGuard>{layoutContent}</AuthGuard>,
    children: [
      { element: <IndexPage />, index: true },

      // brianna custom routes start
      { path: 'iteawd-quiz1', element: <Quiz1Page /> },
      { path: 'iteawd-midtermLabs-ls1', element: <Ls1Page /> },
      { path: 'iteawd-midtermLabs-ls2', element: <Ls2Page /> },
      { path: 'iteawd-midtermLabs-ls3', element: <Ls3Page /> },
      { path: 'iteawd-midtermLabs-ls4', element: <Ls4Page /> },
      { path: 'iteawd-midtermLabs-lq', element: <LqPage /> },

      {
        path: 'iteawd-finalsLabs-ls6',
        children: [
          // ---- INPUTS ROUTE ----
          // ---- Autocomplete routes ----
          { path: 'inputs/autocomplete/combobox', element: <AutocompleteComboBox /> },
          { path: 'inputs/autocomplete/grouped', element: <AutocompleteGrouped /> },
          { path: 'inputs/autocomplete/disabledOptions', element: <AutocompleteDisabled /> },
          { path: 'inputs/autocomplete/multipleValues', element: <AutocompleteMultiple /> },
          { path: 'inputs/autocomplete/fixedOptions', element: <AutocompleteFixed /> },
          { path: 'inputs/autocomplete/checkboxes', element: <AutocompleteCheckboxes /> },
          { path: 'inputs/autocomplete/limitTags', element: <AutocompleteLimitTags /> },
          { path: 'inputs/autocomplete/sizes', element: <AutocompleteSizes /> },
          // ---- Button routes ----
          { path: 'inputs/button/basic', element: <ButtonBasic /> },
          { path: 'inputs/button/text', element: <ButtonText /> },
          { path: 'inputs/button/contained', element: <ButtonContained /> },
          { path: 'inputs/button/outlined', element: <ButtonOutlined /> },
          { path: 'inputs/button/color', element: <ButtonColor /> },
          { path: 'inputs/button/sizes', element: <ButtonSizes /> },
          { path: 'inputs/button/iconsAndLabel', element: <ButtonIconsAndLabel /> },
          { path: 'inputs/button/iconButton', element: <ButtonIconButton /> },
          { path: 'inputs/button/loading', element: <ButtonLoading /> },
          { path: 'inputs/button/badge', element: <ButtonBadge /> },
          // ---- Button Group routes ----
          { path: 'inputs/buttonGroup/basicButtonGroup', element: <BasicButtonGroup /> },
          { path: 'inputs/buttonGroup/buttonVariants', element: <ButtonVariants /> },
          { path: 'inputs/buttonGroup/sizesAndColors', element: <SizesAndColors /> },
          { path: 'inputs/buttonGroup/verticalGroup', element: <VerticalGroup /> },
          { path: 'inputs/buttonGroup/splitButton', element: <SplitButton /> },
          // ---- Checkbox routes ----
          { path: 'inputs/checkbox/basicCheckBoxes', element: <BasicCheckBoxes /> },
          { path: 'inputs/checkbox/label', element: <CheckboxLabel /> },
          { path: 'inputs/checkbox/size', element: <CheckboxSize /> },
          { path: 'inputs/checkbox/color', element: <CheckboxColor /> },
          { path: 'inputs/checkbox/icon', element: <CheckboxIcon /> },
          { path: 'inputs/checkbox/controlled', element: <CheckboxControlled /> },
          { path: 'inputs/checkbox/indeterminate', element: <CheckboxIndeterminate /> },
          { path: 'inputs/checkbox/formGroup', element: <CheckboxFormGroup /> },
          { path: 'inputs/checkbox/labelPlacement', element: <CheckboxLabelPlacement /> },
          // ---- Floating Action Button routes ----
          { path: 'inputs/floatingActionButton/basicFab', element: <FloatingActionButtonBasic /> },
          { path: 'inputs/floatingActionButton/size', element: <FloatingActionButtonSize /> },
          { path: 'inputs/floatingActionButton/animation', element: <FloatingActionButtonAnimation /> },
          // ---- Radio Group routes ----
          { path: 'inputs/radioGroup/radioGroup', element: <RadioGroup /> },
          { path: 'inputs/radioGroup/direction', element: <RadioDirection /> },
          { path: 'inputs/radioGroup/controlled', element: <RadioControlled /> },
          { path: 'inputs/radioGroup/size', element: <RadioSize /> },
          { path: 'inputs/radioGroup/color', element: <RadioColor /> },
          { path: 'inputs/radioGroup/labelPlacement', element: <RadioLabelPlacement /> },
          { path: 'inputs/radioGroup/showError', element: <RadioShowError /> },
          // ---- Rating routes ----
          { path: 'inputs/rating/basicRating', element: <RatingBasicRating /> },
          { path: 'inputs/rating/ratingPrecision', element: <RatingPrecision /> },
          { path: 'inputs/rating/hoverFeedback', element: <RatingHoverFeedback /> },
          { path: 'inputs/rating/sizes', element: <RatingSizes /> },
          { path: 'inputs/rating/customization', element: <RatingCustomization /> },
          { path: 'inputs/rating/radioGroup', element: <RatingRadioGroup /> },
          // ---- Select routes ----
          { path: 'inputs/select/basicSelect', element: <SelectBasicSelect /> },
          { path: 'inputs/select/filledAndStandVar', element: <SelectFilledAndStandVar /> },
          { path: 'inputs/select/labelsAndHelperText', element: <SelectLabelsAndHelperText /> },
          { path: 'inputs/select/autowidth', element: <SelectAutowidth /> },
          { path: 'inputs/select/smallSize', element: <SelectSmallSize /> },
          // ---- Slider routes ----
          { path: 'inputs/sliders/continuousSliders', element: <SliderContinuousSlider /> },
          { path: 'inputs/sliders/sizes', element: <SliderSizes /> },
          { path: 'inputs/sliders/discreteSliders', element: <SliderDiscreteSlider /> },
          { path: 'inputs/sliders/smallSteps', element: <SliderSmallSteps /> },
          { path: 'inputs/sliders/customMarks', element: <SliderCustomMarks /> },
          { path: 'inputs/sliders/restrictedValues', element: <SliderRestrictedValues /> },
          { path: 'inputs/sliders/labelAlwaysVisible', element: <SliderLabelAlwaysVisible /> },
          { path: 'inputs/sliders/rangeSlider', element: <SliderRangeSlider /> },
          { path: 'inputs/sliders/sliderWithInputField', element: <SliderSliderWithInputField /> },
          { path: 'inputs/sliders/color', element: <SliderColor /> },
          { path: 'inputs/sliders/musicPlayer', element: <SliderMusicPlayer /> },
          { path: 'inputs/sliders/verticalSliders', element: <SliderVerticalSlider /> },
          { path: 'inputs/sliders/marksPlacement', element: <SliderMarksPlacement /> },
          { path: 'inputs/sliders/nonLinearScale', element: <SliderNonLinearScale /> },
          // ---- Switch routes ----
          { path: 'inputs/switch/basicSwitches', element: <SwitchBasicSwitches /> },
          { path: 'inputs/switch/label', element: <SwitchLabel /> },
          { path: 'inputs/switch/size', element: <SwitchSize /> },
          { path: 'inputs/switch/color', element: <SwitchColor /> },
          { path: 'inputs/switch/controlled', element: <SwitchControlled /> },
          { path: 'inputs/switch/switchesWithFormGroup', element: <SwitchSwitchesFormGroup /> },
          // ---- Text Field routes ----
          { path: 'inputs/textField/basicTextField', element: <TextFieldBasicTextField /> },
          { path: 'inputs/textField/formProps', element: <TextFieldFormProps /> },
          { path: 'inputs/textField/validation', element: <TextFieldValidation /> },
          { path: 'inputs/textField/multiline', element: <TextFieldMultiline /> },
          { path: 'inputs/textField/select', element: <TextFieldSelect /> },
          { path: 'inputs/textField/icons', element: <TextFieldIcons /> },
          { path: 'inputs/textField/inputAdornments', element: <TextFieldInputAdornments /> },
          { path: 'inputs/textField/customizingAdornments', element: <TextFieldCustomizingAdornments /> },
          { path: 'inputs/textField/sizes', element: <TextFieldSizes /> },
          { path: 'inputs/textField/fullWidth', element: <TextFieldFullWidth /> },
          { path: 'inputs/textField/color', element: <TextFieldColor /> },
          // ---- Transfer List routes ----
          { path: 'inputs/transferList/basicTransferList', element: <TransferListBasicTransferList /> },
          { path: 'inputs/transferList/enhancedTransferList', element: <TransferListEnhancedTransferList /> },
          // ---- Toggle Button routes ----
          { path: 'inputs/toggleButton/exclusiveSelection', element: <ToggleButtonExclusiveSelection /> },
          { path: 'inputs/toggleButton/multipleSelection', element: <ToggleButtonMultipleSelection /> },
          { path: 'inputs/toggleButton/size', element: <ToggleButtonSize /> },
          { path: 'inputs/toggleButton/color', element: <ToggleButtonColor /> },
          { path: 'inputs/toggleButton/verticalButtons', element: <ToggleButtonVerticalButtons /> },
          { path: 'inputs/toggleButton/standaloneToggleButton', element: <ToggleButtonStandaloneToggleButton /> },
          { path: 'inputs/toggleButton/horizontalSpacing', element: <ToggleButtonHorizontalSpacing /> },
          { path: 'inputs/toggleButton/verticalSpacing', element: <ToggleButtonVerticalSpacing /> },

          // ---- DATA DISPLAY routes ----
          // ---- Avatar routes ----
          { path: 'dataDisplays/avatar/imageAvatars', element: <AvatarImageAvatars /> },
          { path: 'dataDisplays/avatar/letterAvatars', element: <AvatarLetterAvatars /> },
          { path: 'dataDisplays/avatar/sizes', element: <AvatarSizes /> },
          { path: 'dataDisplays/avatar/iconAvatars', element: <AvatarIconAvatars /> },
          { path: 'dataDisplays/avatar/variants', element: <AvatarVariants /> },
          { path: 'dataDisplays/avatar/fallbacks', element: <AvatarFallbacks /> },
          { path: 'dataDisplays/avatar/grouped', element: <AvatarGrouped /> },
          { path: 'dataDisplays/avatar/totalAvatars', element: <AvatarTotalAvatars /> },
          { path: 'dataDisplays/avatar/spacing', element: <AvatarSpacing /> },
          { path: 'dataDisplays/avatar/withBadge', element: <AvatarWithBadge /> },
          // ---- Badge routes ----
          { path: 'dataDisplays/badge/basicBadge', element: <BadgeBasicBadge /> },
          { path: 'dataDisplays/badge/color', element: <BadgeColor /> },
          { path: 'dataDisplays/badge/badgeVisibility', element: <BadgeBadgeVisibility /> },
          { path: 'dataDisplays/badge/maximumValue', element: <BadgeMaximumValue /> },
          { path: 'dataDisplays/badge/dotBadge', element: <BadgeDotBadge /> },
          { path: 'dataDisplays/badge/badgeAlignment', element: <BadgeBadgeAlignment /> },
          // ---- Chip routes ----
          { path: 'dataDisplays/chip/basicChip', element: <ChipBasicChip /> },
          { path: 'dataDisplays/chip/clickable', element: <ChipClickable /> },
          { path: 'dataDisplays/chip/deletable', element: <ChipDeletable /> },
          { path: 'dataDisplays/chip/customDeleteIcon', element: <ChipCustomDeleteIcon /> },
          { path: 'dataDisplays/chip/icon', element: <ChipIcon /> },
          { path: 'dataDisplays/chip/avatarChip', element: <ChipAvatarChip /> },
          { path: 'dataDisplays/chip/iconChip', element: <ChipIconChip /> },
          { path: 'dataDisplays/chip/colorChip', element: <ChipColorChip /> },
          { path: 'dataDisplays/chip/sizesChip', element: <ChipSizesChip /> },
          { path: 'dataDisplays/chip/multilineChip', element: <ChipMultilineChip /> },
          { path: 'dataDisplays/chip/chipArray', element: <ChipChipArray /> },
          // ---- Divider routes ----
          { path: 'dataDisplays/divider/introduction', element: <DividerIntroduction /> },
          { path: 'dataDisplays/divider/variants', element: <DividerVariants /> },
          { path: 'dataDisplays/divider/orientation', element: <DividerOrientation /> },
          { path: 'dataDisplays/divider/flexItem', element: <DividerFlexItem /> },
          { path: 'dataDisplays/divider/withChildren', element: <DividerWithChildren /> },
          { path: 'dataDisplays/divider/useWithAList', element: <DividerUseWithAList /> },
          { path: 'dataDisplays/divider/iconGroup', element: <DividerIconGroup /> },
          // ---- Table routes ----
          { path: 'dataDisplays/table/basicTable', element: <TableBasicTable /> },
          { path: 'dataDisplays/table/dataTable', element: <TableDataTable /> },
          { path: 'dataDisplays/table/denseTable', element: <TableDenseTable /> },
          // ---- Tooltip routes ---- 
          { path: 'dataDisplays/tooltip/basicTooltip', element: <TooltipBasicTooltip /> },
          { path: 'dataDisplays/tooltip/positionedTooltips', element: <TooltipPositionedTooltips /> },
          { path: 'dataDisplays/tooltip/arrowTooltips', element: <TooltipArrowTooltips /> },
          { path: 'dataDisplays/tooltip/distanceFromAnchor', element: <TooltipDistanceFromAnchor /> },
          { path: 'dataDisplays/tooltip/triggers', element: <TooltipTriggers /> },
          { path: 'dataDisplays/tooltip/variableWidth', element: <TooltipVariableWidth /> },
          { path: 'dataDisplays/tooltip/disabledElements', element: <TooltipDisabledElements /> },
          { path: 'dataDisplays/tooltip/transitions', element: <TooltipTransitions /> },
          { path: 'dataDisplays/tooltip/followCursor', element: <TooltipFollowCursor /> },
          { path: 'dataDisplays/tooltip/virtualElement', element: <TooltipVirtualElement /> },
          { path: 'dataDisplays/tooltip/showingAndHiding', element: <TooltipShowingAndHiding /> },
          // ---- Typography routes ---- 
          { path: 'dataDisplays/typography/usage', element: <TypographyUsage /> },
        ],
      },

      {
        path: 'iteawd-finalsLabs-ls7',
        children: [
          // ---- FEEDBACK routes ---- 
          // ---- Alert ---- 
          { path: 'feedback/alert/introduction', element: <AlertIntroduction /> },
          { path: 'feedback/alert/severity', element: <AlertSeverity /> },
          { path: 'feedback/alert/variants', element: <AlertVariants /> },
          { path: 'feedback/alert/color', element: <AlertColor /> },
          { path: 'feedback/alert/actions', element: <AlertActions /> },
          { path: 'feedback/alert/icons', element: <AlertIcons /> },
          { path: 'feedback/alert/transitions', element: <AlertTransitions /> },

          // ---- Backdrop ---- 
          { path: 'feedback/backdrop/example', element: <BackdropExample /> },

          // ---- Dialog ---- 
          { path: 'feedback/dialog/introduction', element: <DialogIntroduction /> },
          { path: 'feedback/dialog/alerts', element: <DialogAlerts /> },
          { path: 'feedback/dialog/transitions', element: <DialogTransitions /> },
          { path: 'feedback/dialog/formDialogs', element: <DialogFormDialogs /> },
          { path: 'feedback/dialog/customization', element: <DialogCustomization /> },
          { path: 'feedback/dialog/fullScreenDialogs', element: <DialogFullScreenDialogs /> },
          { path: 'feedback/dialog/optionalSizes', element: <DialogOptionalSizes /> },
          { path: 'feedback/dialog/responsiveFullScreen', element: <DialogResponsiveFullScreen /> },
          { path: 'feedback/dialog/confirmationDialogs', element: <DialogConfirmationDialogs /> },
          { path: 'feedback/dialog/nonModalDialogs', element: <DialogNonModalDialogs /> },
          { path: 'feedback/dialog/draggableDialog', element: <DialogDraggableDialog /> },
          { path: 'feedback/dialog/scrollingLongContent', element: <DialogScrollingLongContent /> },

          // ---- Progress ---- 
          { path: 'feedback/progress/circular/circularIndeterminate', element: <ProgressCircularIndeterminate /> },
          { path: 'feedback/progress/circular/circularColor', element: <ProgressCircularColor /> },
          { path: 'feedback/progress/circular/circularSize', element: <ProgressCircularSize /> },
          { path: 'feedback/progress/circular/circularDeterminate', element: <ProgressCircularDeterminate /> },
          { path: 'feedback/progress/circular/circularTrack', element: <ProgressCircularTrack /> },
          { path: 'feedback/progress/interactiveIntegration', element: <ProgressInteractiveIntegration /> },
          { path: 'feedback/progress/circularWithLabel', element: <ProgressCircularWithLabel /> },
          { path: 'feedback/progress/linear/linearIndeterminate', element: <ProgressLinearIndeterminate /> },
          { path: 'feedback/progress/linear/linearColor', element: <ProgressLinearColor /> },
          { path: 'feedback/progress/linear/linearDeterminate', element: <ProgressLinearDeterminate /> },
          { path: 'feedback/progress/linear/linearBuffer', element: <ProgressLinearBuffer /> },
          { path: 'feedback/progress/linear/linearWithLabel', element: <ProgressLinearWithLabel /> },
          { path: 'feedback/progress/delayingAppearance', element: <ProgressDelayingAppearance /> },

          // ---- Skeleton ---- 
          { path: 'feedback/skeleton/variants', element: <SkeletonVariants /> },
          { path: 'feedback/skeleton/animations', element: <SkeletonAnimations /> },
          { path: 'feedback/skeleton/pulsateExample', element: <SkeletonPulsateExample /> },
          { path: 'feedback/skeleton/waveExample', element: <SkeletonWaveExample /> },
          { path: 'feedback/skeleton/inferringDimensions', element: <SkeletonInferringDimensions /> },
          { path: 'feedback/skeleton/color', element: <SkeletonColor /> },

          // ---- Snackbar ---- 
          { path: 'feedback/snackbar', element: <SnackbarIntroduction /> },
          { path: 'feedback/snackbar/introduction', element: <SnackbarIntroduction /> },
          { path: 'feedback/snackbar/basics', element: <SnackbarPosition /> },
          { path: 'feedback/snackbar/basics/position', element: <SnackbarPosition /> },
          { path: 'feedback/snackbar/basics/content', element: <SnackbarContent /> },
          { path: 'feedback/snackbar/basics/automaticDismiss', element: <SnackbarAutomaticDismiss /> },
          { path: 'feedback/snackbar/basics/transitions', element: <SnackbarTransitions /> },
          { path: 'feedback/snackbar/useWithAlerts', element: <SnackbarUseWithAlerts /> },
          { path: 'feedback/snackbar/consecutiveSnackbars', element: <SnackbarConsecutiveSnackbars /> },

          // ---- SURFACES routes ---- 
          // ---- Accordion ---- 
          { path: 'surfaces/accordion/introduction', element: <AccordionIntroduction /> },
          { path: 'surfaces/accordion/expandIcon', element: <AccordionExpandIcon /> },
          { path: 'surfaces/accordion/expandedByDefault', element: <AccordionExpandedByDefault /> },
          { path: 'surfaces/accordion/transition', element: <AccordionTransition /> },
          { path: 'surfaces/accordion/disabledItem', element: <AccordionDisabledItem /> },

          // ---- App Bar ---- 
          { path: 'surfaces/appBar/basicAppBar', element: <AppBarBasicAppBar /> },
          { path: 'surfaces/appBar/appBarWithMenu', element: <AppBarAppBarWithMenu /> },
          { path: 'surfaces/appBar/appBarWithResponsiveMenu', element: <AppBarWithResponsiveMenu /> },
          { path: 'surfaces/appBar/appBarWithSearchField', element: <AppBarAppBarWithSearchField /> },
          { path: 'surfaces/appBar/responsiveAppBarWithDrawer', element: <AppBarResponsiveAppBarWithDrawer /> },
          { path: 'surfaces/appBar/appBarWithPrimarySearchField', element: <AppBarAppBarWithPrimarySearchField /> },
          { path: 'surfaces/appBar/dense', element: <AppBarDense /> },
          { path: 'surfaces/appBar/prominent', element: <AppBarProminent /> },
          { path: 'surfaces/appBar/bottomAppBar', element: <AppBarBottomAppBar /> },
          { path: 'surfaces/appBar/hideAppBar', element: <AppBarHideAppBar /> },
          { path: 'surfaces/appBar/elevateAppBar', element: <AppBarElevateAppBar /> },
          { path: 'surfaces/appBar/backToTop', element: <AppBarBackToTop /> },

          // ---- Card ---- 
          { path: 'surfaces/card/introduction', element: <CardIntroduction /> },
          { path: 'surfaces/card/outlinedCard', element: <CardOutlinedCard /> },
          { path: 'surfaces/card/complexInteraction', element: <CardComplexInteraction /> },
          { path: 'surfaces/card/media', element: <CardMedia /> },
          { path: 'surfaces/card/primaryAction', element: <CardPrimaryAction /> },
          { path: 'surfaces/card/uiControls', element: <CardUIControls /> },
          { path: 'surfaces/card/activeStateStyles', element: <CardActiveStateStyles /> },

          // ---- Paper ---- 
          { path: 'surfaces/paper/introduction', element: <PaperIntroduction /> },
          { path: 'surfaces/paper/elevation', element: <PaperElevation /> },
          { path: 'surfaces/paper/variants', element: <PaperVariants /> },
          { path: 'surfaces/paper/corners', element: <PaperCorners /> },

          // ---- NAVIGATION routes ---- 
          // ---- Bottom Navigation ---- 
          { path: 'navigation/bottomNavigation/bottomNavigation', element: <BottomNavigationBottomNavigation /> },
          { path: 'navigation/bottomNavigation/bottomNavigationWithNoLabel', element: <BottomNavigationBottomNavigationWithNoLabel /> },
          { path: 'navigation/bottomNavigation/fixedPositioning', element: <BottomNavigationFixedPositioning /> },

          // ---- Breadcrumbs ---- 
          { path: 'navigation/breadcrumbs/basicBreadcrumbs', element: <BreadcrumbsBasicBreadcrumbs /> },
          { path: 'navigation/breadcrumbs/activeLastBreadcrumb', element: <BreadcrumbsActiveLastBreadcrumb /> },
          { path: 'navigation/breadcrumbs/customSeparator', element: <BreadcrumbsCustomSeparator /> },
          { path: 'navigation/breadcrumbs/breadcrumbsWithIcons', element: <BreadcrumbsWithIcons /> },
          { path: 'navigation/breadcrumbs/collapsedBreadcrumbs', element: <BreadcrumbsCollapsedBreadcrumbs /> },
          { path: 'navigation/breadcrumbs/condensedWithMenu', element: <BreadcrumbsCondensedWithMenu /> },
          { path: 'navigation/breadcrumbs/customization', element: <BreadcrumbsCustomization /> },

          // ---- Drawer ---- 
          { path: 'navigation/drawer/temporaryDrawer', element: <DrawerTemporaryDrawer /> },
          { path: 'navigation/drawer/anchor', element: <DrawerAnchor /> },
          { path: 'navigation/drawer/swipeable', element: <DrawerSwipeable /> },
          { path: 'navigation/drawer/swipeableEdge', element: <DrawerSwipeableEdge /> },
          { path: 'navigation/drawer/responsiveDrawer', element: <DrawerResponsiveDrawer /> },
          { path: 'navigation/drawer/persistentDrawer', element: <DrawerPersistentDrawer /> },
          { path: 'navigation/drawer/miniVariantDrawer', element: <DrawerMiniVariantDrawer /> },
          { path: 'navigation/drawer/permanentDrawer', element: <DrawerPermanentDrawer /> },

          // ---- Link ---- 
          { path: 'navigation/link/basicLinks', element: <LinkBasicLinks /> },
          { path: 'navigation/link/underline', element: <LinkUnderline /> },

          // ---- Menu ---- 
          { path: 'navigation/menu/basicMenu', element: <MenuBasicMenu /> },
          { path: 'navigation/menu/iconMenu', element: <MenuIconMenu /> },
          { path: 'navigation/menu/denseMenu', element: <MenuDenseMenu /> },
          { path: 'navigation/menu/selectedMenu', element: <MenuSelectedMenu /> },
          { path: 'navigation/menu/positionedMenu', element: <MenuPositionedMenu /> },
          { path: 'navigation/menu/compositionWithMenuList', element: <MenuCompositionWithMenuList /> },
          { path: 'navigation/menu/accountMenu', element: <MenuAccountMenu /> },
          { path: 'navigation/menu/customization', element: <MenuCustomization /> },
          { path: 'navigation/menu/maxHeightMenu', element: <MenuMaxHeightMenu /> },
          { path: 'navigation/menu/limitations', element: <MenuLimitations /> },
          { path: 'navigation/menu/contextMenu', element: <MenuContextMenu /> },
          { path: 'navigation/menu/groupedMenu', element: <MenuGroupedMenu /> },

          // ---- Pagination ---- 
          { path: 'navigation/pagination/basicPagination', element: <PaginationBasicPagination /> },
          { path: 'navigation/pagination/outlinedPagination', element: <PaginationOutlinedPagination /> },
          { path: 'navigation/pagination/roundedPagination', element: <PaginationRoundedPagination /> },
          { path: 'navigation/pagination/paginationSize', element: <PaginationPaginationSize /> },
          { path: 'navigation/pagination/buttons', element: <PaginationButtons /> },
          { path: 'navigation/pagination/customIcons', element: <PaginationCustomIcons /> },
          { path: 'navigation/pagination/paginationRanges', element: <PaginationPaginationRanges /> },
          { path: 'navigation/pagination/tablePagination', element: <PaginationTablePagination /> },

          // ---- Speed Dial ---- 
          { path: 'navigation/speedDial/basicSpeedDial', element: <SpeedDialBasicSpeedDial /> },
          { path: 'navigation/speedDial/customCloseIcon', element: <SpeedDialCustomCloseIcon /> },
          { path: 'navigation/speedDial/persistentActionTooltips', element: <SpeedDialPersistentActionTooltips /> },

          // ---- Stepper ---- 
          { path: 'navigation/stepper/linear', element: <StepperLinear /> },
          { path: 'navigation/stepper/nonLinear', element: <StepperNonLinear /> },
          { path: 'navigation/stepper/alternativeLabel', element: <StepperAlternativeLabel /> },
          { path: 'navigation/stepper/errorStep', element: <StepperErrorStep /> },
          { path: 'navigation/stepper/verticalStepper', element: <StepperVerticalStepper /> },
          { path: 'navigation/stepper/text', element: <StepperText /> },
          { path: 'navigation/stepper/dots', element: <StepperDots /> },
          { path: 'navigation/stepper/progress', element: <StepperProgress /> },

          // ---- Tabs ---- 
          { path: 'navigation/tabs/introduction', element: <TabsIntroduction /> },
          { path: 'navigation/tabs/wrappedLabels', element: <TabsWrappedLabels /> },
          { path: 'navigation/tabs/coloredTab', element: <TabsColoredTab /> },
          { path: 'navigation/tabs/disabledTab', element: <TabsDisabledTab /> },
          { path: 'navigation/tabs/fullWidth', element: <TabsFullWidth /> },
          { path: 'navigation/tabs/centered', element: <TabsCentered /> },
          { path: 'navigation/tabs/automaticScrollButtons', element: <TabsAutomaticScrollButtons /> },
          { path: 'navigation/tabs/forcedScrollButtons', element: <TabsForcedScrollButtons /> },
          { path: 'navigation/tabs/preventScrollButtons', element: <TabsPreventScrollButtons /> },
          { path: 'navigation/tabs/verticalTabs', element: <TabsVerticalTabs /> },
          { path: 'navigation/tabs/navTabs', element: <TabsNavTabs /> },
          { path: 'navigation/tabs/iconTabs', element: <TabsIconTabs /> },
          { path: 'navigation/tabs/iconPosition', element: <TabsIconPosition /> },
        ],
      },

      {
        path: 'iteawd-finalsLabs-q345',
        children: [
          // ---- Scenario 1 2 3 ---- 
          { path: 'scenario1', element: <Scenario1 /> },
          { path: 'scenario2', element: <Scenario2 /> },
          { path: 'scenario3', element: <Scenario3 /> },
        ],
      },

      { path: 'iteawd-finals-finalExam', element: <FinalExam /> },

      { path: 'ecommerce', element: <OverviewEcommercePage /> },
      { path: 'analytics', element: <OverviewAnalyticsPage /> },
      { path: 'banking', element: <OverviewBankingPage /> },
      { path: 'booking', element: <OverviewBookingPage /> },
      { path: 'file', element: <OverviewFilePage /> },
      { path: 'course', element: <OverviewCoursePage /> },
      {
        path: 'user',
        children: [
          { element: <UserProfilePage />, index: true },
          { path: 'profile', element: <UserProfilePage /> },
          { path: 'cards', element: <UserCardsPage /> },
          { path: 'list', element: <UserListPage /> },
          { path: 'new', element: <UserCreatePage /> },
          { path: ':id/edit', element: <UserEditPage /> },
          { path: 'account', element: <UserAccountPage /> },
        ],
      },
      {
        path: 'product',
        children: [
          { element: <ProductListPage />, index: true },
          { path: 'list', element: <ProductListPage /> },
          { path: ':id', element: <ProductDetailsPage /> },
          { path: 'new', element: <ProductCreatePage /> },
          { path: ':id/edit', element: <ProductEditPage /> },
        ],
      },
      {
        path: 'order',
        children: [
          { element: <OrderListPage />, index: true },
          { path: 'list', element: <OrderListPage /> },
          { path: ':id', element: <OrderDetailsPage /> },
        ],
      },
      {
        path: 'invoice',
        children: [
          { element: <InvoiceListPage />, index: true },
          { path: 'list', element: <InvoiceListPage /> },
          { path: ':id', element: <InvoiceDetailsPage /> },
          { path: ':id/edit', element: <InvoiceEditPage /> },
          { path: 'new', element: <InvoiceCreatePage /> },
        ],
      },
      {
        path: 'post',
        children: [
          { element: <BlogPostsPage />, index: true },
          { path: 'list', element: <BlogPostsPage /> },
          { path: ':title', element: <BlogPostPage /> },
          { path: ':title/edit', element: <BlogEditPostPage /> },
          { path: 'new', element: <BlogNewPostPage /> },
        ],
      },
      {
        path: 'job',
        children: [
          { element: <JobListPage />, index: true },
          { path: 'list', element: <JobListPage /> },
          { path: ':id', element: <JobDetailsPage /> },
          { path: 'new', element: <JobCreatePage /> },
          { path: ':id/edit', element: <JobEditPage /> },
        ],
      },
      {
        path: 'tour',
        children: [
          { element: <TourListPage />, index: true },
          { path: 'list', element: <TourListPage /> },
          { path: ':id', element: <TourDetailsPage /> },
          { path: 'new', element: <TourCreatePage /> },
          { path: ':id/edit', element: <TourEditPage /> },
        ],
      },
      { path: 'file-manager', element: <FileManagerPage /> },
      { path: 'mail', element: <MailPage /> },
      { path: 'chat', element: <ChatPage /> },
      { path: 'calendar', element: <CalendarPage /> },
      { path: 'kanban', element: <KanbanPage /> },
      { path: 'permission', element: <PermissionDeniedPage /> },
      { path: 'params', element: <ParamsPage /> },
      { path: 'blank', element: <BlankPage /> },
    ],
  },
];
