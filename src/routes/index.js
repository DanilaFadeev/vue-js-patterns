import Route from './Route';

export default [
  {
    name: '🤫 Signle File Component (S.F.C.)',
    path: '/signle-file-component',
    component: Route,
    props: {
      component: import('../patterns/SignleFileComponent/Greeting'),
      sources: [
        { path: 'patterns/SignleFileComponent/Greeting.vue', lang: 'vue' }
      ]
    }
  },
  {
    name: '🤖 String Template Component',
    path: '/string-template-component',
    component: Route,
    props: {
      component: import('../patterns/StringTemplateComponent/MoodSet'),
      sources: [
        { path: 'patterns/StringTemplateComponent/MoodSet.js', lang: 'javascript' }
      ]
    }
  },
  {
    name: '☕️ Class Component',
    path: '/class-component',
    component: Route,
    props: {
      component: import('../patterns/ClassComponent/CoffeeMachine'),
      sources: [
        { path: 'patterns/ClassComponent/CoffeeMachine.vue', lang: 'vue' }
      ]
    }
  },
  {
    name: '⚛️ JSX component',
    path: '/jsx-component',
    component: Route,
    props: {
      component: import('../patterns/JSXComponent/PolicyAgreement'),
      sources: [
        { path: 'patterns/JSXComponent/PolicyAgreement.js', lang: 'javascript' }
      ]
    }
  },
  {
    name: '✍️ Components Communication',
    path: '/components-communication',
    component: Route,
    props: {
      component: import('../patterns/ComponentsCommunication/SimpleForm'),
      sources: [
        { path: 'patterns/ComponentsCommunication/SimpleForm.vue', lang: 'vue' },
        { path: 'patterns/ComponentsCommunication/FormattedInput.vue', lang: 'vue' }
      ]
    }
  },
  {
    name: '✈️ Conditional Rendering',
    path: '/condition-rendering',
    component: Route,
    props: {
      component: import('../patterns/ConditionalRendering/BookFlight'),
      sources: [
        { path: 'patterns/ConditionalRendering/BookFlight.vue', lang: 'vue' }
      ]
    }
  },
  {
    name: '🐊 Dynamic component',
    path: '/dynamic-component',
    component: Route,
    props: {
      component: import('../patterns/DynamicComponent/FormInputSelector'),
      sources: [
        { path: 'patterns/DynamicComponent/FormInputSelector.vue', lang: 'vue' },
        { path: 'patterns/DynamicComponent/InputComponents.js', lang: 'javascript' }
      ]
    }
  },
  {
    name: '👨‍💻 Functional Component',
    path: '/functional-component',
    component: Route,
    props: {
      component: import('../patterns/FunctionalComponent/ListWrapper'),
      sources: [
        { path: 'patterns/FunctionalComponent/ListWrapper.vue', lang: 'vue' },
        { path: 'patterns/FunctionalComponent/ListItem.vue', lang: 'vue' }
      ]
    }
  },
  {
    name: '💼 Slots (Default, Named, Scoped)',
    path: '/slots',
    component: Route,
    props: {
      component: import('../patterns/Slots/NewsApplication'),
      sources: [
        { path: 'patterns/Slots/NewsApplication.vue', lang: 'vue' },
        { path: 'patterns/Slots/Layout.vue', lang: 'vue' },
        { path: 'patterns/Slots/NewsCard.vue', lang: 'vue' }
      ]
    }
  },
  {
    name: '🤷‍♂️ Renderless Component',
    path: '/renderless-component',
    component: Route,
    props: {
      component: import('../patterns/RenderlessComponent/TicketView'),
      sources: [
        { path: 'patterns/RenderlessComponent/TicketView.vue', lang: 'vue' },
        { path: 'patterns/RenderlessComponent/TicketRenderless.vue', lang: 'vue' }
      ]
    }
  },
  {
    name: '👀 Mixins',
    path: '/mixins',
    component: Route,
    props: {
      component: import('../patterns/Mixins/SearchBar'),
      sources: [
        { path: 'patterns/Mixins/SearchBar.vue', lang: 'vue' },
        { path: 'patterns/Mixins/SearchMixin.vue', lang: 'vue' }
      ]
    }
  },
  {
    name: '👂🏼 Passing props and listeners',
    path: '/props-and-listeners',
    component: Route,
    props: {
      component: import('../patterns/PropsAndListeners/ContactForm'),
      sources: [
        { path: 'patterns/PropsAndListeners/ContactForm.vue', lang: 'vue' },
        { path: 'patterns/PropsAndListeners/InputGroup.vue', lang: 'vue' }
      ]
    }
  },
  {
    name: '🙌🏼 Higher Order Component (HOC)',
    path: '/higher-order-component',
    component: Route,
    props: {
      component: import('../patterns/HigherOrderComponent/ClickerLogger'),
      sources: [
        { path: 'patterns/HigherOrderComponent/ClickerLogger.vue', lang: 'vue' },
        { path: 'patterns/HigherOrderComponent/Clicker.vue', lang: 'vue' },
        { path: 'patterns/HigherOrderComponent/withLogger.js', lang: 'javascript' }
      ]
    }
  },
  {
    name: '💌 Provider and Consumer',
    path: '/provider-and-consumer',
    component: Route,
    props: {
      component: import('../patterns/ProviderConsumer/Messanger'),
      sources: [
        { path: 'patterns/ProviderConsumer/Messanger.vue', lang: 'vue' },
        { path: 'patterns/ProviderConsumer/MessangerProvider.vue', lang: 'vue' },
        { path: 'patterns/ProviderConsumer/MessangerConsumer.vue', lang: 'vue' }
      ]
    }
  },
  {
    name: '🤹🏻 Provide and Inject',
    path: '/provide-and-inject',
    component: Route,
    props: {
      component: import('../patterns/ProvideInject/UiKit'),
      sources: [
        { path: 'patterns/ProvideInject/UiKit.vue', lang: 'vue' },
        { path: 'patterns/ProvideInject/ThemeProvider.vue', lang: 'vue' },
        { path: 'patterns/ProvideInject/Alert.vue', lang: 'vue' }
      ]
    }
  },
  {
    name: '❌ Error Handling',
    path: '/error-handling',
    component: Route,
    props: {
      component: import('../patterns/ErrorHandling/AppWrapper.vue'),
      sources: [
        { path: 'patterns/ErrorHandling/AppWrapper.vue', lang: 'vue' },
        { path: 'patterns/ErrorHandling/DamagedComponent.vue', lang: 'vue' },
        { path: 'patterns/ErrorHandling/ErrorHandler.vue', lang: 'vue' }
      ]
    }
  }
];
