# Aplicativo de CRUD React Native

### App feito para a Pós Graduação em Desenvolvimento Mobile Unyleya - 2021/2

## App em funcionamento

![](screenshots/crud.gif)

## Executando o APP

- Na pasta clonada, execute `yarn` para que sejam baixadas as dependências do projeto
- Após isso, execute `yarn android` ou `yarn ios` a depender do seu emulador

## Libs utilizadas

    - @react-navigation/native
    - @react-navigation/stack
    - axios
    - react
    - react-native
    - react-native-fab
    - react-native-gesture-handler
    - react-native-safe-area-context
    - react-native-screens
    - react-native-swipeable
    - react-native-vector-icons

## Executando o JSON SERVER

- Via terminal, navegue até a pasta `services` e execute o seguinte comando:
  `json-server --watch db.json --host SEU_IP --port 3333 --delay 300`

- Se certifique de que o IP na tag host corresponda ao IP da sua máquina.
  - Para descobrir seu IP, no Windows execute `ipconfig`
  - No Mac, execute: `ipconfig getifaddr en0`
  - No Linux, execute: `ifconfig`
- O uso da tag `--delay` é opcional
