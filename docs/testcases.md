# Mjukvarutestning | Testfallsdokumentation

# **TESTFALL 1**

| **Testfalls-ID**    | TF-001      | **Namn**      |             |
| ------------------- | ----------- | ------------- | ----------- |
| **Krav/User story** | Ej aktuellt | **Prioritet** | Ej aktuellt |
| **Testare**         | Erika       | **Datum**     | 2026-09-16  |
| **Version**         | 1.0         | **Testmiljö** | Chrome, Mac |

## **1. Syfte**

Kontrollera att en ny todo-titel läggs till när användaren klickar på knappen "Lägg till".

## **2. Förberedelser**

| **Förutsättningar**                                       | **Testdata** |
| --------------------------------------------------------- | ------------ |
| Todo-listan presenteras visuellt med input-fält och knapp |  Köpa mjölk        |

## **3. Teststeg**

| **Nr** | **Handling**                                         | **Testdata** | **Förväntat resultat** |
| ------ | ---------------------------------------------------- | ------------ | ---------------------- |
| 1      | Klickar på input-fältet                              |              |                        |
| 2      | Skriver en todo-titel i input-fältet                 | Köpa mjölk   |                        |
| 3      | Klickar på "Lägg till"-knappen                       |              |   Todo "Köpa mjölk" presenteras i listan för uppgifter                     


## **4. Testresultat**

### **Faktiskt resultat**

En ny todo-titel "Köpa mjölk" lades till i listan för uppgifter att göra, när knappen "Lägg till" klickades på.

| **Status**            |             | **Fel-ID**  |             |
| --------------------- | ----------- | ----------- | ----------- |
| **Allvarlighet**      | Ej aktuellt | **Omtest**  | Ej aktuellt |
| **Testets slutdatum** | Ej aktuellt | **Testare** | Erika       |

## **5. Efter testet**

| **Eftervillkor och återställning** | **Kommentarer** |
| ---------------------------------- | --------------- |
| Ej aktuellt                        | Ej aktuellt     |

---

# **TESTFALL 2**

| **Testfalls-ID**    | TF-002      | **Namn**      |             |
| ------------------- | ----------- | ------------- | ----------- |
| **Krav/User story** | Ej aktuellt | **Prioritet** | Ej aktuellt |
| **Testare**         | Erika       | **Datum**     | 2026-09-16  |
| **Version**         | 1.0         | **Testmiljö** | Chrome, Mac |

## **1. Syfte**

Kontrollera att en todo-titel tas bort från listan med uppgifter att göra, när knappen "Ta bort" klickas på.

## **2. Förberedelser**

| **Förutsättningar**                                                                   | **Testdata** |
| -------------------------------------------------------------------------------------| ------------ |
| En lista med åtminstone en todo-uppgift finns tillgänglig genom tidigare inlagd data | Köpa mjölk   |

## **3. Teststeg**

| **Nr** | **Handling**                                                                   | **Testdata** | **Förväntat resultat**                                       |
| ------ | ------------------------------------------------------------------------------ | ------------ | ------------ |
                                                           |
| 1      | Klickar på knappen "Ta bort" invid todo-uppgiften                              | "Köpa mjölk" | Todo-uppgiften tas bort och blir inte längre synlig i listan |
| 3      |                                                                                |              |                                                              |
| 4      |                                                                                |              |                                                              |

## **4. Testresultat**

### **Faktiskt resultat**

Todo-uppgiften "Köpa mjölk" togs bort från listan när knappen "Ta bort" klickades på.

| **Status**            |             | **Fel-ID**  |             |
| --------------------- | ----------- | ----------- | ----------- |
| **Allvarlighet**      | Ej aktuellt | **Omtest**  | Ej aktuellt |
| **Testets slutdatum** | 2026-09-16  | **Testare** | Erika       |

## **5. Efter testet**

| **Eftervillkor och återställning** | **Kommentarer** |
| ---------------------------------- | --------------- |
| Ej aktuellt                        | Ej aktuellt     |
