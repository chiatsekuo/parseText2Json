#   p a r s e T e x t 2 J s o n  
  
 T h i s   r e p o s i t o r y   l e t s   y o u   e a s i l y   p a r s e   a n y   ` . t x t `   f i l e   c o n t a i n i n g   s t r i n g s   o r   n u m b e r s   i n t o   a   d i c t i o n a r y   f o r m a t   ( J S O N   O b j e c t )   t h a t   c o u n t s   t h e   f r e q u e n c y   o f   e a c h   w o r d /   n u m b e r .  
  
 # # #   H o w   t o   u s e   i t ?  
  
 1 .   R u n   ` n p m   i   p a r s e t e x t 2 j s o n `   i n   y o u r   p r o j e c t   d i r e c t o r y .   S e e   a n   e x a m p l e   i n   t h e   n e x t   s t e p .  
  
 2 .   U s i n g   * N o d e . J s *   t o   r u n   t h e   c o d e   i n   ` i n d e x . j s `  
  
       ` ` ` j a v a s c r i p t  
       c o n s t   p a r s e   =   r e q u i r e ( ' p a r s e t e x t 2 j s o n ' ) ;  
        
       c o n s t   f i l e P a t h   =   ' i n p u t . t x t ' ;  
       c o n s t   o u t p u t   =   p a r s e . p a r s e S t r i n g ( f i l e P a t h ) ;  
       c o n s o l e . l o g ( o u t p u t ) ;  
       ` ` `  
  
 3 .   T h e   o u t p u t   s h o u l d   b e   l i k e   b e l o w :  
  
       ` ` ` j s o n  
       [   {   v a l u e :   ' W h a t ' ,   c o u n t :   1   } ,  
           {   v a l u e :   ' i s ' ,   c o u n t :   2   } ,  
           {   v a l u e :   ' L o r e m ' ,   c o u n t :   5   } ,  
           {   v a l u e :   ' I p s u m ' ,   c o u n t :   5   } ,  
           {   v a l u e :   ' s i m p l y ' ,   c o u n t :   1   } ,  
           {   v a l u e :   ' d u m m y ' ,   c o u n t :   2   } ,  
           {   v a l u e :   ' t e x t ' ,   c o u n t :   2   } ,  
         	 	 	 	 . . .  
         	 	 	 	 . . .  
         	 	 	 	 . . .  
           {   v a l u e :   ' P a g e M a k e r ' ,   c o u n t :   1   } ,  
           {   v a l u e :   ' i n c l u d i n g ' ,   c o u n t :   1   } ,  
           {   v a l u e :   ' v e r s i o n s ' ,   c o u n t :   1   }   ]  
       ` ` `  
  
 