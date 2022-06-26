public with sharing class ApexLwcBasic {

     @AuraEnabled(cacheable=true)
   public static List<Account> getAccounts() {
    return [SELECT Id,Name from Account order by Name DESC limit 5 ];
    }

    //imperative 
    @AuraEnabled
    public static List<Contact> getContacts(){
      return [SELECT Id,Name from Contact Limit 10];
    }


}
